MEAL_PLAN_SHOPPING_SYSTEM_PROMPT = """
Create a healthy, sustainable meal plan following these guidelines:

Nutrition and Sustainability Guidelines:
* Use whole, unprocessed ingredients
* Include fiber-rich foods like vegetables, fruits, legumes, or whole grains
* Add healthy fats from sources like olive oil, nuts, seeds, or avocados
* Feature a variety of plant-based ingredients for flavor and nutrient diversity
* Avoid ultra-processed foods or artificial additives
* Opt for complex carbohydrates such as quinoa, brown rice, or oats
* Include high-quality protein sources, preferring plant-based or sustainable options
* Season with herbs and spices for flavor instead of relying on added salt
* Prioritize ingredients with a low carbon footprint, such as locally grown and seasonal produce

Return JSON with this structure:

{
  "meal_plan": {
    "days": [
      {
        "day": 1,
        "meals": [
          {
            "type": "Breakfast",
            "recipe_name": "Quinoa Breakfast Bowl"
          },
          {
            "type": "Lunch",
            "recipe_name": "Mediterranean Chickpea Salad"
          },
          {
            "type": "Dinner",
            "recipe_name": "Lentil and Sweet Potato Curry"
          }
        ]
      },
      {
        "day": 2,
        "meals": [
          {
            "type": "Breakfast",
            "recipe_name": "Overnight Oats"
          },
          {
            "type": "Lunch",
            "recipe_name": "Greek Salad"
          },
          {
            "type": "Dinner",
            "recipe_name": "Vegetable Stir Fry"
          }
        ]
      }
    ]
  },
  "recipes": [
    {
      "name": "Quinoa Breakfast Bowl",
      "ingredients": [
        {
          "name": "Quinoa",
          "amount": {
            "quantity": 80,
            "unit": "g"
          }
        },
        {
          "name": "Mixed Berries",
          "amount": {
            "quantity": 150,
            "unit": "g"
          }
        },
        {
          "name": "Almonds",
          "amount": {
            "quantity": 30,
            "unit": "g"
          }
        },
        {
          "name": "Plant-based Milk",
          "amount": {
            "quantity": 250,
            "unit": "ml"
          }
        }
      ]
    },
    {
      "name": "Mediterranean Chickpea Salad",
      "ingredients": [
        {
          "name": "Chickpeas",
          "amount": {
            "quantity": 240,
            "unit": "g"
          }
        },
        {
          "name": "Cucumber",
          "amount": {
            "quantity": 200,
            "unit": "g"
          }
        },
        {
          "name": "Cherry Tomatoes",
          "amount": {
            "quantity": 150,
            "unit": "g"
          }
        },
        {
          "name": "Extra Virgin Olive Oil",
          "amount": {
            "quantity": 30,
            "unit": "ml"
          }
        },
        {
          "name": "Fresh Basil",
          "amount": {
            "quantity": 10,
            "unit": "g"
          }
        }
      ]
    }
  ]
}

Required fields:
- Recipe names
- Ingredient lists with quantities in metric units (g for weight, ml for volume)
"""

RECIPE_DETAILS_PROMPT = """
Given a recipe name and list of ingredients, provide detailed preparation instructions. Return JSON matching this structure:

{
  "recipe_details": [{
    "name": "Mediterranean Chickpea Salad",
    "prep_time": "15 minutes",
    "cook_time": "0 minutes",
    "ingredients": [{
      "name": "Chickpeas",
      "amount": {
        "quantity": 240,
        "unit": "g"
      }
    }],
    "steps": [
      "Drain and rinse chickpeas",
      "Dice cucumber and tomatoes",
      "Combine all ingredients in a large bowl",
      "Drizzle with olive oil and toss gently",
      "Season with salt and pepper to taste"
    ]
  }]
}

Required fields:
- Recipe name
- Preparation and cooking times
- Ingredients with exact quantities in metric units (g/ml)
- Detailed, step-by-step instructions
"""