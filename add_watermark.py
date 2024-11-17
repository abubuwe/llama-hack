from PIL import Image, ImageDraw, ImageFont, ImageFilter
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
import io
import functools

def download_font(font_size=60):  # Made font size configurable
    """Download and cache the font."""
    try:
        font_url = "https://github.com/google/fonts/raw/main/ofl/montserrat/Montserrat-Medium.ttf"
        response = requests.get(font_url)   
        return ImageFont.truetype(io.BytesIO(response.content), font_size)
    except:
        # Try different system fonts based on OS
        possible_fonts = [
            '/System/Library/Fonts/Helvetica.ttf',  # macOS
            '/System/Library/Fonts/Arial.ttf',      # macOS alternative
            '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',  # Linux
            'C:\\Windows\\Fonts\\arial.ttf'         # Windows
        ]
        
        for font_path in possible_fonts:
            try:
                return ImageFont.truetype(font_path, font_size)
            except:
                continue
        
        # If no system fonts work, create a larger bitmap font
        print("Warning: No system fonts found. Using a basic font.")
        return ImageFont.load_default()

def process_single_image(image_path, output_dir, font, text="This is an AI generated image"):
    """Process a single image with watermark and save to output directory."""
    try:
        with Image.open(image_path).convert('RGB') as image:
            draw = ImageDraw.Draw(image)
            
            # Get image dimensions
            W, H = image.size
            
            # Calculate text position (cached)
            bbox = draw.textbbox((0, 0), text, font=font)
            text_width = bbox[2] - bbox[0]
            text_height = bbox[3] - bbox[1]
            
            x = W - text_width - 40
            y = H - text_height - 40
            
            # Create a mask for the outline
            mask = Image.new('L', image.size, 0)
            mask_draw = ImageDraw.Draw(mask)
            
            # Draw outline in one go using mask
            outline_width = 4
            mask_draw.text((x, y), text, font=font, fill=255)
            mask = mask.filter(ImageFilter.MaxFilter(outline_width * 2 + 1))
            draw.bitmap((0, 0), mask, fill="black")
            
            # Draw main text
            draw.text((x, y), text, font=font, fill="#F5F5F5")
            
            # Create output directory if it doesn't exist
            output_dir.mkdir(parents=True, exist_ok=True)
            
            # Save image to output directory
            output_path = output_dir / image_path.name
            image.save(output_path)
            print(f"Added text to {output_path}")
            
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def add_text_to_images(font_size=60):  # Made font size configurable
    """Add watermark text to generated images and save to 'images_with_text' folder."""
    # Get font with specified size
    font = download_font(font_size)
    
    image_dir = Path("images")
    output_dir = Path("images_with_text")
    image_paths = list(image_dir.glob("*.webp"))
    
    max_workers = 4  # Adjust this based on your system's capabilities
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {
            executor.submit(process_single_image, image_path, output_dir, font): image_path
            for image_path in image_paths
        }
        for future in as_completed(futures):
            image_path = futures[future]
            try:
                future.result()
            except Exception as e:
                print(f"Error processing {image_path}: {e}")

def main():
    add_text_to_images(font_size=60)  # You can adjust the font size here

if __name__ == "__main__":
    main()