import face_recognition
import os
import pickle

# Path to the dataset of labeled images (each folder should be named after the person)
data_path = 'face_recognition/labeled_images'  # Replace with your path

# Initialize data storage
known_encodings = []
known_names = []

# Process each person's folder
for person_name in os.listdir(data_path):
    person_folder = os.path.join(data_path, person_name)
    if os.path.isdir(person_folder):
        for image_file in os.listdir(person_folder):
            image_path = os.path.join(person_folder, image_file)
            image = face_recognition.load_image_file(image_path)
            encodings = face_recognition.face_encodings(image)

            if encodings:
                known_encodings.append(encodings[0])
                known_names.append(person_name)

# Save encodings for later use
with open('face_encodings.pkl', 'wb') as file:
    pickle.dump((known_encodings, known_names), file)

print("Training completed and data saved.")
