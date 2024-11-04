from PIL import Image
import os

def check_image_formats(directory):
    print(f"Checking image formats in directory: {directory}")
    for root, dirs, files in os.walk(directory):
        for file in files:
            filepath = os.path.join(root, file)
            try:
                img = Image.open(filepath)
                print(f"{filepath}: {img.format}")
            except IOError:
                print(f"{filepath}: Not a valid image")

if __name__ == "__main__":
    directory = '/home/roro/codes/she builds/face_recog/images'
    check_image_formats(directory)
