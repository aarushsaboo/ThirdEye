import os
import shutil
from PIL import Image

def save_image(image_path, destination_folder, index):
    filename = f"{index}_{os.path.basename(destination_folder)}.jpg"
    destination_path = os.path.join(destination_folder, filename)
    
    shutil.copy(image_path, destination_path)
    print(f"Image saved as {filename} in {destination_folder}")

def create_folder_if_not_exists(folder_path):
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)

def get_next_index(folder_path):
    existing_files = os.listdir(folder_path)
    max_index = 0
    for filename in existing_files:
        try:
            index = int(filename.split('_')[0])
            max_index = max(max_index, index)
        except ValueError:
            continue
    return max_index + 1