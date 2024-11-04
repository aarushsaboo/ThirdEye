import os
from utils.face_utils import load_known_faces, recognize_faces
from utils.file import save_image, create_folder_if_not_exists, get_next_index

def main():
    # Load known faces
    try:
        known_face_encodings, known_face_names = load_known_faces(os.path.join(os.getcwd(), 'images'))
    except Exception as e:
        print(f"Error loading known faces: {str(e)}")
        return
    
    # Load known faces
    # known_face_encodings, known_face_names = load_known_faces('images')

    # Get image path from user
    image_path = input("Enter the path of the image to recognize: ")

    # Recognize faces in the image
    recognized_names = recognize_faces(image_path, known_face_encodings, known_face_names)

    print("Recognized names:", recognized_names)

    for name in recognized_names:
        if name == "Unknown":
            unknown_folder = os.path.join('images', 'unknown')
            create_folder_if_not_exists(unknown_folder)
            
            index = get_next_index(unknown_folder)
            save_image(image_path, unknown_folder, index)
        else:
            person_folder = os.path.join('images', name)
            create_folder_if_not_exists(person_folder)
            
            index = get_next_index(person_folder)
            save_image(image_path, person_folder, index)

if __name__ == "__main__":
    main()
