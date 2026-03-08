from PIL import Image
import os

def crop_center(image_path, output_path, crop_ratio=0.6):
    """
    Crops the image to focus on the center (assuming the face is somewhat centered/top-centered).
    Since the user wants a "bust shot" from a "full/wider shot", we need to zoom in.
    
    Args:
        image_path: Path to input image
        output_path: Path to save cropped image
        crop_ratio: How much of the original width/height to keep (0.6 means keep 60%)
    """
    try:
        img = Image.open(image_path)
        width, height = img.size
        
        # Calculate new dimensions
        new_width = int(width * crop_ratio)
        new_height = int(height * crop_ratio)
        
        # Calculate coordinates for cropping
        # We want to center horizontally, but maybe bias towards the top vertically for a headshot
        left = (width - new_width) / 2
        
        # For vertical, we usually want to cut more from the bottom than the top for a headshot
        # if the original is a wider shot including torso/table.
        # Let's try to keep the top 10-15% margin and cut the rest from bottom
        top = height * 0.15 
        
        # Adjust if the crop goes out of bounds
        if top + new_height > height:
            top = height - new_height
            
        right = left + new_width
        bottom = top + new_height
        
        # Crop
        img_cropped = img.crop((left, top, right, bottom))
        
        # Save
        img_cropped.save(output_path)
        print(f"Successfully cropped image to {output_path}")
        print(f"Original size: {width}x{height}, New size: {new_width}x{new_height}")
        
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    input_path = "/home/ubuntu/pivot-holdings/client/public/images/representative.jpg"
    output_path = "/home/ubuntu/pivot-holdings/client/public/images/representative_cropped.jpg"
    
    # Check if file exists
    if os.path.exists(input_path):
        # Using 0.5 ratio to zoom in significantly (2x zoom effectively) to match the close-up of the other member
        crop_center(input_path, output_path, crop_ratio=0.5)
    else:
        print(f"File not found: {input_path}")
