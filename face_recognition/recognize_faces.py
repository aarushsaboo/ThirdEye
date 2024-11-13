import face_recognition
import cv2
import pickle
import os
from moviepy.editor import VideoFileClip
import shutil

# Load previously saved encodings
with open('face_encodings.pkl', 'rb') as file:
    known_encodings, known_names = pickle.load(file)

# Directory paths
media_dir = 'path/to/uncategorized_media'        # Replace with your path
labeled_images_dir = 'path/to/labeled_images'    # Replace with your path

# Function to save an unrecognized image or frame to the person's folder
def save_unrecognized_image(image, person_name):
    # Create a folder for the person if it doesn't exist
    person_folder = os.path.join(labeled_images_dir, person_name)
    if not os.path.exists(person_folder):
        os.makedirs(person_folder)
    
    # Save the image in the person's folder with a unique name
    image_count = len(os.listdir(person_folder))
    image_path = os.path.join(person_folder, f"{image_count + 1}_{person_name}.jpg")
    cv2.imwrite(image_path, image)

# Function to recognize faces in an image and add unrecognized ones to folders
def recognize_faces_in_image(image):
    report = []
    face_locations = face_recognition.face_locations(image)
    face_encodings = face_recognition.face_encodings(image, face_locations)

    for face_encoding in face_encodings:
        matches = face_recognition.compare_faces(known_encodings, face_encoding)
        name = "Unknown"

        if True in matches:
            match_index = matches.index(True)
            name = known_names[match_index]
        else:
            # For unrecognized faces, prompt for the person's name
            cv2.imshow("Unrecognized Face", image)
            cv2.waitKey(1)  # Display the image for the user
            name = input("Enter the name of the person for this unrecognized face, or leave blank to skip: ").strip()
            if name:
                save_unrecognized_image(image, name)
                known_encodings.append(face_encoding)  # Add to known encodings
                known_names.append(name)               # Add to known names
        report.append(name)

    cv2.destroyAllWindows()  # Close any open image windows
    return report

# Process images and videos in the media directory
for media_file in os.listdir(media_dir):
    media_path = os.path.join(media_dir, media_file)
    if media_file.lower().endswith(('.png', '.jpg', '.jpeg')):
        # Process an image
        image = face_recognition.load_image_file(media_path)
        recognized_faces = recognize_faces_in_image(image)
        print(f"In {media_file}: recognized - {', '.join(recognized_faces)}")

    elif media_file.lower().endswith(('.mp4', '.avi', '.mov', '.mkv')):
        # Process a video
        video_clip = VideoFileClip(media_path)
        print(f"\nIn video {media_file}:")

        for frame_time in range(0, int(video_clip.duration), 1):  # One frame per second
            frame = video_clip.get_frame(frame_time)
            frame_bgr = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)  # Convert RGB to BGR for OpenCV
            recognized_faces = recognize_faces_in_image(frame_bgr)

            if recognized_faces:
                print(f"  At {frame_time}s: recognized - {', '.join(recognized_faces)}")

print("Recognition and categorization completed.")
