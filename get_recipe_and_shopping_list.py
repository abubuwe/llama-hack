from pydantic import BaseModel, Field
from typing import List, Optional, Dict
from prompts import MEAL_PLAN_SHOPPING_SYSTEM_PROMPT, RECIPE_DETAILS_PROMPT
from groq import Groq
import instructor
from dotenv import load_dotenv
import json
from pathlib import Path

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

class MealPlanResponse(BaseModel):
    meal_plan: MealPlan
    recipes: List[Recipe]

    class Config:
        json_schema_extra = {
            "required": ["meal_plan", "recipes"]
        }

class RecipeDetailsResponse(BaseModel):
    recipe_details: List[Recipe]


def generate_meal_plan_groq(products: List[Product], num_days: int) -> Optional[MealPlanResponse]:
    # Patch Groq client with instructor
    client = instructor.from_groq(Groq(), mode=instructor.Mode.JSON)
    
    try:
        products_text = "\n".join([
            f"- {p.name}: Original price ${p.price}, Discounted ${p.discounted_price}"
            for p in products
        ])

        # Call Groq API with instructor
        meal_plan = client.chat.completions.create(
            model="llama-3.2-90b-vision-preview",
            response_model=MealPlanResponse,
            messages=[
                {"role": "system", "content": MEAL_PLAN_SHOPPING_SYSTEM_PROMPT},
                {"role": "user", "content": f"Available products:\n{products_text}\nCreate a {num_days}-day meal plan using these products. Ensure all recipes include ingredients with prices and detailed steps."}
            ],
            temperature=0.7,
        )
        
        # Print raw response for debugging
        print("\n=== Raw Groq Response ===")
        print(meal_plan)
        print("=====================\n")
        
        return meal_plan

    except Exception as e:
        print(f"Error generating meal plan with Groq: {e}")
        return None

def load_products_from_json(json_path: str) -> List[Product]:
    """Load products from a JSON file and convert to Product objects."""
    try:
        json_path = Path(json_path)
        with open(json_path) as f:
            data = json.load(f)
        
        if not isinstance(data, list) or not data or "products" not in data[0]:
            raise KeyError("JSON must have a list with one object containing a 'products' key")
            
        products = []
        for idx, item in enumerate(data[0]["products"], 1):
            try:
                # Updated required fields
                required_fields = ["id", "name", "price", "discounted_price", "quantity", "unit"]
                missing_fields = [f for f in required_fields if f not in item]
                if missing_fields:
                    print(f"Product {idx} missing fields: {missing_fields}")
                    continue
                
                product = Product(
                    id=item["id"],
                    name=item["name"],
                    price=item["price"],
                    discounted_price=item["discounted_price"],
                    quantity=item["quantity"],
                    unit=item["unit"]
                )
                products.append(product)
                
            except KeyError as e:
                print(f"Invalid product at index {idx}: {e}")
                continue
                
        return products

    except FileNotFoundError:
        print(f"Error: Could not find file {json_path}")
        return []
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON in {json_path}: {e}")
        return []

def extract_meal_details(meal_plan_response: MealPlanResponse) -> dict:
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
            model="llama-3.2-90b-vision-preview",
            response_model=RecipeDetailsResponse,
            messages=[
                {"role": "system", "content": RECIPE_DETAILS_PROMPT},
                {"role": "user", "content": f"Get detailed instructions for these recipes:\n{recipes_text}"}
            ],
            temperature=0.7,
        )
        return response.recipe_details
    except Exception as e:
        print(f"Error getting recipe details: {e}")
        return []

# Usage
def main():
    products = load_products_from_json("products.json")
    if products:
        # Get Groq client
        client = instructor.from_groq(Groq(), mode=instructor.Mode.JSON)
        
        meal_plan_response = generate_meal_plan_groq(products, num_days=2)
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
        else:
            print("Failed to generate meal plan.")

if __name__ == "__main__":
    main()