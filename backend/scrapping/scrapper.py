from flask import Flask, request, render_template, redirect, url_for
import os
import requests
import pandas as pd
from bs4 import BeautifulSoup
from urllib.parse import urljoin

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MEDIA_FOLDER'] = 'media'

# Create upload and media directories if they don't exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
os.makedirs(app.config['MEDIA_FOLDER'], exist_ok=True)

def download_file(url, folder):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        file_name = os.path.join(folder, url.split('/')[-1])

        with open(file_name, 'wb') as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)

        print(f"Downloaded: {file_name}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

def scrape_media_from_website(url, folder):
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')

        # Find all images
        img_tags = soup.find_all('img')
        for img in img_tags:
            img_url = urljoin(url, img.get('src'))
            download_file(img_url, folder)

        # Find all videos
        video_tags = soup.find_all('video')
        for video in video_tags:
            video_url = urljoin(url, video.get('src'))
            download_file(video_url, folder)

    except Exception as e:
        print(f"Error scraping {url}: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'GET':
        return redirect(url_for('index'))
    
    if 'file' not in request.files:
        return redirect(request.url)
    file = request.files['file']
    
    if file.filename == '':
        return redirect(request.url)

    if file and file.filename.endswith('.csv'):
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)

        df = pd.read_csv(file_path)
        urls = df['url']  # Make sure your CSV has a column named 'url'

        for url in urls:
            folder_name = os.path.join(app.config['MEDIA_FOLDER'], url.split("//")[-1].replace('/', '_'))
            os.makedirs(folder_name, exist_ok=True)
            scrape_media_from_website(url, folder_name)

        return 'Scraping completed! Check the media folder.'

    return 'Invalid file format. Please upload a CSV file.'

if __name__ == '__main__':
    app.run(debug=True)
