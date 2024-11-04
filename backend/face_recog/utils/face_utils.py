import face_recognition
from PIL import Image
import numpy as np
import os
def load_known_faces(folder_path):
    known_face_encodings = []
    known_face_names = []

    for person_folder in os.listdir(folder_path):
        person_folder_path = os.path.join(folder_path, person_folder)
        
        if os.path.isdir(person_folder_path):
            for filename in os.listdir(person_folder_path):
                image_path = os.path.join(person_folder_path, filename)
                
                try:
                    image = face_recognition.load_image_file(image_path)
                    face_encoding = face_recognition.face_encodings(image)[0]
                    known_face_encodings.append(face_encoding)
                    known_face_names.append(person_folder)
                except Exception as e:
                    print(f"Error processing {image_path}: {str(e)}")
                    continue

    return known_face_encodings, known_face_names

def recognize_faces(image_path, known_face_encodings, known_face_names):
    image = face_recognition.load_image_file(image_path)
    face_locations = face_recognition.face_locations(image)
    face_encodings = face_recognition.face_encodings(image, face_locations)

    recognized_names = []
    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces(known_face_encodings, face_encoding)
        name = "Unknown"

        face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
        best_match_index = np.argmin(face_distances)
        if matches[best_match_index]:
            name = known_face_names[best_match_index]

        recognized_names.append(name)

    return recognized_names
