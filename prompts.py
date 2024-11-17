MEAL_PLAN_SHOPPING_SYSTEM_PROMPT = """
Health Guidelines: 
* prefer whole, unprocessed ingredients
* prefer Include fiber-rich foods like vegetables, fruits, legumes, or whole grains
* prefer healthy fats from sources like olive oil, nuts, seeds, avocados and fatty fish
* prefer a variety of plant-based ingredients for flavor and nutrient diversity
* Avoid ultra-processed foods or artificial additives
* prefer complex carbohydrates or whole grain such as quinoa, brown rice, or oats
* prefer high fibre foods like lentils and pulses 
* prefer high-quality protein sources, preferring plant-based or sustainable options
* Prioritize ingredients with a low carbon footprint, such as locally grown and seasonal produce
* Make sure it's tasty

Task: 
- Stack rank the ingredients in the list according Health Guidelines with the healthiest first. Do not add any food consider unhealthy like red meat, UPF, refined carbs etc.
- Preferably but not exclusively use ingredients identified above to healthy meals that follow Health Guidelines
- Avoid products if the consumption is associated with all cause mortality, like red meat, UPF, refined carbs etc.
- Return a list of products with their id from the list you used in the meal plan.

Return JSON with this structure:

{
  "identified_healthy_ingredients": [
    "Olive Oil"
    "Lentils",
    "Chickpeas", 
    "Sweet Potatoes",
    "Quinoa",
  ],
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
          "name": "Almond Milk",
          "amount": {
            "quantity": 240,
            "unit": "ml"
          }
        },
        {
          "name": "Banana",
          "amount": {
            "quantity": 1,
            "unit": "whole"
          }
        },
        {
          "name": "Honey",
          "amount": {
            "quantity": 15,
            "unit": "ml"
          }
        },
        {
          "name": "Cinnamon",
          "amount": {
            "quantity": 2,
            "unit": "g"
          }
        },
        {
          "name": "Mixed Berries",
          "amount": {
            "quantity": 100,
            "unit": "g"
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
            "quantity": 400,
            "unit": "g"
          }
        },
        {
          "name": "Cucumber",
          "amount": {
            "quantity": 1,
            "unit": "whole"
          }
        },
        {
          "name": "Cherry Tomatoes",
          "amount": {
            "quantity": 200,
            "unit": "g"
          }
        },
        {
          "name": "Red Onion",
          "amount": {
            "quantity": 1,
            "unit": "whole"
          }
        },
        {
          "name": "Feta Cheese",
          "amount": {
            "quantity": 100,
            "unit": "g"
          }
        },
        {
          "name": "Olive Oil",
          "amount": {
            "quantity": 30,
            "unit": "ml"
          }
        },
        {
          "name": "Lemon Juice",
          "amount": {
            "quantity": 30,
            "unit": "ml"
          }
        },
        {
          "name": "Fresh Parsley",
          "amount": {
            "quantity": 30,
            "unit": "g"
          }
        }
      ]
    },
    {
      "name": "Lentil and Sweet Potato Curry",
      "ingredients": [
        {
          "name": "Lentils",
          "amount": {
            "quantity": 200,
            "unit": "g"
          }
        },
        {
          "name": "Sweet Potatoes",
          "amount": {
            "quantity": 400,
            "unit": "g"
          }
        },
        {
          "name": "Coconut Milk",
          "amount": {
            "quantity": 400,
            "unit": "ml"
          }
        },
        {
          "name": "Onion",
          "amount": {
            "quantity": 1,
            "unit": "whole"
          }
        },
        {
          "name": "Garlic",
          "amount": {
            "quantity": 4,
            "unit": "cloves"
          }
        },
        {
          "name": "Ginger",
          "amount": {
            "quantity": 30,
            "unit": "g"
          }
        },
        {
          "name": "Curry Powder",
          "amount": {
            "quantity": 15,
            "unit": "g"
          }
        },
        {
          "name": "Vegetable Stock",
          "amount": {
            "quantity": 500,
            "unit": "ml"
          }
        },
        {
          "name": "Spinach",
          "amount": {
            "quantity": 200,
            "unit": "g"
          }
        }
      ]
    }
  ],
  "used_healthy_ingredients": [
    {
      "id": 11,
      "name": "Quinoa"
    },
    {
      "id": 7,
      "name": "Chickpeas"
    },
    {
      "id": 3,
      "name": "Sweet Potatoes"
    }
  ]
}
"""

RECIPE_DETAILS_PROMPT = """
Given a recipe name and list of ingredients, provide detailed preparation instructions and the meal type out of this list:[vegan, vegetarian, pescetarian,omnivorous]
Return JSON matching this structure:

{
  "recipe_details": [{
    "name": "Mediterranean Chickpea Salad",
    "prep_time": "20 minutes",
    "cook_time": "0 minutes",
    "category": "Vegan"
    "ingredients": [
      {
        "name": "Chickpeas",
        "amount": {
          "quantity": 240,
          "unit": "g"
        }
      },
      {
        "name": "Cherry Tomatoes",
        "amount": {
          "quantity": 200,
          "unit": "g"
        }
      },
      {
        "name": "Persian Cucumbers",
        "amount": {
          "quantity": 200,
          "unit": "g"
        }
      },
      {
        "name": "Red Onion",
        "amount": {
          "quantity": 100,
          "unit": "g"
        }
      },
      {
        "name": "Extra Virgin Olive Oil",
        "amount": {
          "quantity": 45,
          "unit": "ml"
        }
      },
      {
        "name": "Fresh Parsley",
        "amount": {
          "quantity": 30,
          "unit": "g"
        }
      },
      {
        "name": "Fresh Mint",
        "amount": {
          "quantity": 15,
          "unit": "g"
        }
      },
      {
        "name": "Lemon",
        "amount": {
          "quantity": 1,
          "unit": "whole"
        }
      },
      {
        "name": "Hemp Seeds",
        "amount": {
          "quantity": 40,
          "unit": "g"
        }
      },
      {
        "name": "Kalamata Olives",
        "amount": {
          "quantity": 50,
          "unit": "g"
        }
      }
    ],
    "steps": [
      "Begin by thoroughly draining and rinsing the chickpeas in a colander. Allow them to drain completely for 5 minutes to remove excess moisture",
      "While the chickpeas are draining, wash all produce thoroughly under cool running water",
      "Halve the cherry tomatoes, ensuring uniform size for even distribution in the salad",
      "Dice the Persian cucumbers into 1cm cubes, maintaining consistency in size",
      "Finely dice the red onion. For milder onion flavor, soak the diced onions in cold water for 5 minutes, then drain and pat dry",
      "Finely chop both the fresh parsley and mint leaves, keeping them separate",
      "Zest the entire lemon first, then extract its juice, keeping both separate",
      "In a large mixing bowl, combine the drained chickpeas with the prepared tomatoes, cucumbers, and onion",
      "Add the chopped parsley and mint to the bowl",
      "Pour in the olive oil, then add the lemon juice and zest",
      "Season with salt and freshly ground black pepper to taste",
      "Gently toss all ingredients together until evenly combined",
      "Top the salad with hemp seeds and halved kalamata olives just before serving",
      "Give one final gentle toss and serve immediately for best texture and freshness"
    ]
  }]
}

Required fields:
- Recipe name
- Preparation and cooking times
- Ingredients with exact quantities in metric units (g/ml)
- Detailed, step-by-step instructions
"""