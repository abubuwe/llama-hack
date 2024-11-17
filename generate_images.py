import json
from pathlib import Path
from typing import List
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image, ImageDraw, ImageFont
import io
from dotenv import load_dotenv
import os

def extract_recipe_names(meal_plan_path: str) -> List[str]:
    """Extract unique recipe names from meal plan JSON."""
    with open(meal_plan_path) as f:
        data = json.load(f)
    
    recipes = set()
    for day in data["meal_plan"]["days"]:
        for meal in day["meals"]:
            recipes.add(meal["recipe_name"])
    
    return list(recipes)

def generate_single_image(recipe: str, api_key: str, image_dir: Path):
    """Generate a single image."""
    try:
        response = requests.post(
            "https://api.stability.ai/v2beta/stable-image/generate/core",
            headers={
                "authorization": f"Bearer {api_key}",
                "accept": "image/*"
            },
            files={"none": ('', '')},
            data={
                "prompt": f"Professional food photography of {recipe}, appetizing presentation, restaurant quality on a dark table",
                "output_format": "webp",
            }
        )

        if response.status_code == 200:
            image_name = recipe.lower().replace(' ', '_').replace(',', '').replace('&', 'and') + '.webp'
            image_path = image_dir / image_name
            with open(image_path, 'wb') as f:
                f.write(response.content)
            print(f"Generated image for {recipe}")
        else:
            print(f"Error generating image for {recipe}: {response.text}")
    except Exception as e:
        print(f"Failed to generate image for {recipe}: {str(e)}")

def generate_recipe_images(recipe_names: List[str], api_key: str):
    """Generate all images in parallel using ThreadPoolExecutor."""
    image_dir = Path("images")
    image_dir.mkdir(exist_ok=True)
    
    max_workers = 21  # Adjust this based on the API rate limits
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        future_to_recipe = {
            executor.submit(generate_single_image, recipe, api_key, image_dir): recipe
            for recipe in recipe_names
        }
        
        for future in as_completed(future_to_recipe):
            recipe = future_to_recipe[future]
            try:
                future.result()
            except Exception as e:
                print(f"Error generating image for {recipe}: {e}")
                
def main():
    # Load environment variables from .env file
    load_dotenv()
    
    # Get API key from environment with error handling
    API_KEY = os.getenv("STABILITY_API_KEY")
    if not API_KEY:
        raise ValueError("STABILITY_API_KEY not found in environment variables")
    
    meal_plan_path = "results/meal_plan.json"
    
    recipe_names = extract_recipe_names(meal_plan_path)
    print(f"Found {len(recipe_names)} unique recipes")
    
    generate_recipe_images(recipe_names, API_KEY)

if __name__ == "__main__":
    main()