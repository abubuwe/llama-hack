from pydantic import BaseModel, Field
from typing import List, Optional, Dict
from prompts import MEAL_PLAN_SHOPPING_SYSTEM_PROMPT, RECIPE_DETAILS_PROMPT
from groq import Groq
import instructor
from dotenv import load_dotenv
import json
from pathlib import Path
import pandas as pd

# Load the Groq API key from .env file
load_dotenv()

class Product(BaseModel):
    id: int
    name: str
    price: float
    discounted_price: float
    quantity: float
    unit: str

class Amount(BaseModel):
    quantity: float
    unit: str

class Ingredient(BaseModel):
    name: str
    amount: Amount

class Recipe(BaseModel):
    name: str
    prep_time: str
    cook_time: str
    ingredients: List[Ingredient]
    steps: List[str]

class Meal(BaseModel):
    type: str  # "Breakfast", "Lunch", "Dinner"
    recipe_name: str

class DailyMealPlan(BaseModel):
    day: int  # or use date: str for specific dates
    meals: List[Meal]

class MealPlan(BaseModel):
    days: List[DailyMealPlan]

class ShoppingItem(BaseModel):
    name: str
    total_quantity: float
    unit: str
    price_per_unit: float
    discounted_price: Optional[float] = None

class ShoppingList(BaseModel):
    items: List[ShoppingItem]

class CostAnalysis(BaseModel):
    total_original_price: float
    total_discounted_price: float
    total_savings_amount: float
    savings_percentage: float
    cost_per_meal: float
    cost_per_serving: float

class UsedHealthyIngredient(BaseModel):
    id: int
    name: str

class HealthyMealPlanResponse(BaseModel):
    identified_healthy_ingredients: List[str]
    meal_plan: MealPlan
    recipes: List[Recipe]
    used_healthy_ingredients: List[UsedHealthyIngredient]

class RecipeDetailsResponse(BaseModel):
    recipe_details: List[Recipe]


def generate_meal_plan_groq(products: List[Product], num_days: int) -> Optional[HealthyMealPlanResponse]:
    client = instructor.from_groq(Groq(), mode=instructor.Mode.JSON)
    
    try:
        products_text = "\n".join([
            f"- [{p.id}] {p.name}"
            for p in products
        ])

        user_message = f"Available products:\n{products_text}\nCreate a {num_days}-day healthy meal plan"
         
        print("\n=== User Message to Groq API ===")
        print(user_message)
        print("=============================\n")

        meal_plan = client.chat.completions.create(
            model="llama-3.1-70b-versatile",
            response_model=HealthyMealPlanResponse,
            messages=[
                {"role": "system", "content": MEAL_PLAN_SHOPPING_SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ],
            temperature=0.7,
        )
                
        return meal_plan

    except Exception as e:
        print(f"Error generating meal plan with Groq: {e}")
        return None

def load_products_from_csv(csv_path: str) -> List[Product]:
    """Load products from a CSV file and convert to Product objects."""
    try:
        # Read CSV
        df = pd.read_csv(csv_path)
        
        # Convert numeric columns
        df['price'] = pd.to_numeric(df['price'], errors='coerce')
        df['clubcard_price'] = pd.to_numeric(df['clubcard_price'], errors='coerce')
        df['quantity'] = pd.to_numeric(df['quantity'], errors='coerce')
        df['id'] = pd.to_numeric(df['id'], errors='coerce')
        
        products = []
        for _, row in df.iterrows():
            try:
                product = Product(
                    id=int(row['id']),  # Use ID from CSV
                    name=row['simple_name'],
                    price=float(row['price']),
                    discounted_price=float(row['clubcard_price']),
                    quantity=float(row['quantity']),
                    unit=str(row['quantity_unit'])
                )
                products.append(product)
            except (ValueError, KeyError) as e:
                print(f"Skipping invalid product {row['product_name']}: {e}")
                continue
                
        print(f"Loaded {len(products)} products from CSV")
        return products

    except FileNotFoundError:
        print(f"Error: Could not find file {csv_path}")
        return []
    except pd.errors.EmptyDataError:
        print(f"Error: CSV file {csv_path} is empty")
        return []
    except Exception as e:
        print(f"Error loading products from CSV: {e}")
        return []

def extract_meal_details(meal_plan_response: HealthyMealPlanResponse) -> dict:
    """
    Extract meal details including recipes, types and ingredients from a MealPlanResponse.
    Returns formatted JSON structure without day information.
    """
    meal_details = {
        "meals": []
    }
    
    # Create recipe lookup for quick access
    recipe_lookup = {recipe.name: recipe for recipe in meal_plan_response.recipes}
    
    # Process each day and meal
    for day in meal_plan_response.meal_plan.days:
        for meal in day.meals:
            recipe = recipe_lookup.get(meal.recipe_name)
            if recipe:
                meal_info = {
                    "type": meal.type,
                    "recipe_name": meal.recipe_name,
                    "ingredients": [
                        {
                            "name": ingredient.name,
                            "quantity": ingredient.amount.quantity,
                            "unit": ingredient.amount.unit
                        }
                        for ingredient in recipe.ingredients
                    ]
                }
                meal_details["meals"].append(meal_info)
    
    return meal_details

def get_recipe_details(meal_details: dict, client: instructor.Instructor) -> List[Recipe]:
    """Get detailed recipe instructions from LLM using RECIPE_DETAILS_PROMPT."""
    try:
        recipes_text = json.dumps({"recipes": meal_details["meals"]}, indent=2)
        
        response = client.chat.completions.create(
            model="llama-3.1-70b-versatile",
            response_model=RecipeDetailsResponse, 
            messages=[
                {"role": "system", "content": RECIPE_DETAILS_PROMPT},
                {"role": "user", "content": f"Get detailed instructions for these recipes:\n{recipes_text}"}
            ],
            temperature=0.7,
        )

        # Print response for debugging
        print("\n=== Recipe Details Response ===")
        print(json.dumps(response.model_dump(), indent=2))
        print("==============================\n")

        return response.recipe_details
    except Exception as e:
        print(f"Error getting recipe details: {e}")
        return []

def analyze_healthy_ingredient_savings(meal_plan_response: HealthyMealPlanResponse) -> pd.DataFrame:
    """
    Analyze price savings for healthy ingredients used in meal plan.
    Returns DataFrame with savings analysis.
    """
    # Create DataFrame from used healthy ingredients
    healthy_ingredients_df = pd.DataFrame([
        {'id': ingredient.id, 'name': ingredient.name}
        for ingredient in meal_plan_response.used_healthy_ingredients
    ])
    
    # Read Tesco products
    tesco_df = pd.read_csv('data/tesco_products_final.csv')
    
    # Join dataframes on id
    merged_df = pd.merge(
        healthy_ingredients_df,
        tesco_df,
        on='id',
        how='left'
    )
    
    # Calculate savings
    savings_df = merged_df[[
        'id',
        'product_name',
        'price',
        'clubcard_price',
        'discount',
        'percent_discount'
    ]].copy()
    
    # Sort by percent discount
    savings_df = savings_df.sort_values('percent_discount', ascending=False)
    
    print(f"\nAnalyzed {len(savings_df)} healthy ingredients:")
    print(f"Total potential savings: £{savings_df['discount'].sum():.2f}")
    
    return savings_df

# Usage
def main():
    products = load_products_from_csv("data/tesco_products_final.csv")
    if products:
        # Get Groq client
        client = instructor.from_groq(Groq(), mode=instructor.Mode.JSON)
        
        meal_plan_response = generate_meal_plan_groq(products, num_days=7)
        if meal_plan_response:
            # Extract meal details
            meal_details = extract_meal_details(meal_plan_response)
            
            # Get recipe details
            recipe_details = get_recipe_details(meal_details, client)
            
            # Update recipes in meal_plan_response with detailed steps
            for recipe in meal_plan_response.recipes:
                for detailed_recipe in recipe_details:
                    if recipe.name == detailed_recipe.name:
                        recipe.prep_time = detailed_recipe.prep_time
                        recipe.cook_time = detailed_recipe.cook_time
                        recipe.steps = detailed_recipe.steps
            
            # Print updated meal plan
            print("\n=== Meal Plan Details with Recipe Instructions ===")
            print(json.dumps(meal_plan_response.model_dump(), indent=2))
            
            # Analyze healthy ingredient savings
            savings_analysis = analyze_healthy_ingredient_savings(meal_plan_response)
            print("\nHealthy Ingredient Savings Analysis:")
            print(savings_analysis)
        else:
            print("Failed to generate meal plan.")

if __name__ == "__main__":
    main()