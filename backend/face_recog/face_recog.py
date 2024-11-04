# from flask import Flask, render_template, request, send_file, jsonify
# import os
# from werkzeug.utils import secure_filename
# from PIL import Image
# import face_recognition
# import numpy as np
# from utils.face_utils import load_known_faces, recognize_faces
# from utils.file_utils import save_image, create_folder_if_not_exists, get_next_index

# app = Flask(__name__)
# app.config['UPLOAD_FOLDER'] = './uploads'

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/upload', methods=['POST'])
# def upload_file():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400
    
#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({"error": "No selected file"}), 400
    
#     if file and allowed_file(file.filename):
#         filename = secure_filename(file.filename)
#         filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#         file.save(filepath)
        
#         known_face_encodings, known_face_names = load_known_faces('./images')
#         recognized_names = recognize_faces(filepath, known_face_encodings, known_face_names)
        
#         result = {
#             "filename": filename,
#             "recognized_names": recognized_names
#         }
        
#         return jsonify(result), 200
 
#     return jsonify({"error": "Invalid file"}), 400

# @app.route('/download/<string:image_name>')
# def download_file(image_name):
#     path = os.path.join(app.config['UPLOAD_FOLDER'], image_name)
#     return send_file(path, as_attachment=True)

# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in {'png', 'jpg', 'jpeg'}

# if __name__ == '__main__':
#     app.run(debug=True)


# from flask import Flask, render_template, request, send_file, jsonify
# import os
# from werkzeug.utils import secure_filename
# from PIL import Image
# import face_recognition
# import numpy as np
# from utils.face_utils import load_known_faces, recognize_faces
# from utils.file_utils import save_image, create_folder_if_not_exists, get_next_index

# app = Flask(__name__)
# app.config['UPLOAD_FOLDER'] = './uploads'

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/upload', methods=['POST'])
# def upload_file():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400
    
#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({"error": "No selected file"}), 400
    
#     if file and allowed_file(file.filename):
#         filename = secure_filename(file.filename)
#         filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#         file.save(filepath)
        
#         known_face_encodings, known_face_names = load_known_faces('./images')
#         recognized_names = recognize_faces(filepath, known_face_encodings, known_face_names)
        
#         # Save the image in the corresponding person's folder
#         for name in recognized_names:
#             if name != "Unknown":
#                 person_folder = os.path.join('./images', name)
#                 create_folder_if_not_exists(person_folder)
                
#                 index = get_next_index(person_folder)
#                 save_image(filepath, person_folder, index)
                
#                 result = {
#                     "filename": filename,
#                     "recognized_names": recognized_names
#                 }
#                 return jsonify(result), 200
        
#         # If no faces were recognized, save the image in the 'unknown' folder
#         unknown_folder = './images/unknown'
#         create_folder_if_not_exists(unknown_folder)
#         index = get_next_index(unknown_folder)
#         save_image(filepath, unknown_folder, index)
        
#         result = {
#             "filename": filename,
#             "recognized_names": ["Unknown"]
#         }
#         return jsonify(result), 200
 
#     return jsonify({"error": "Invalid file"}), 400

# @app.route('/download/<string:image_name>')
# def download_file(image_name):
#     path = os.path.join(app.config['UPLOAD_FOLDER'], image_name)
#     return send_file(path, as_attachment=True)

# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in {'png', 'jpg', 'jpeg'}

# if __name__ == '__main__':
#     app.run(debug=True)


from flask import Flask, render_template, request, send_file, jsonify
import os
from werkzeug.utils import secure_filename
from PIL import Image
import face_recognition
import numpy as np
from utils.face_utils import load_known_faces, recognize_faces
from utils.file_utils import save_image, create_folder_if_not_exists, get_next_index

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './uploads'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        known_face_encodings, known_face_names = load_known_faces('./images')
        recognized_names = recognize_faces(filepath, known_face_encodings, known_face_names)
        
        # Save the image in the corresponding person's folder
        for name in recognized_names:
            if name != "Unknown":
                person_folder = os.path.join('./images', name)
                create_folder_if_not_exists(person_folder)
                
                index = get_next_index(person_folder)
                save_image(filepath, person_folder, index)
                
                result = {
                    "filename": filename,
                    "recognized_names": recognized_names
                }
                return jsonify(result), 200
        
        # If no faces were recognized, save the image in the 'unknown' folder
        unknown_folder = './images/unknown'
        create_folder_if_not_exists(unknown_folder)
        index = get_next_index(unknown_folder)
        save_image(filepath, unknown_folder, index)
        
        result = {
            "filename": filename,
            "recognized_names": ["Unknown"]
        }
        return jsonify(result), 200
 
    return jsonify({"error": "Invalid file"}), 400

@app.route('/download/<string:image_name>')
def download_file(image_name):
    path = os.path.join(app.config['UPLOAD_FOLDER'], image_name)
    return send_file(path, as_attachment=True)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in {'png', 'jpg', 'jpeg'}

if __name__ == '__main__':
    app.run(debug=True)
