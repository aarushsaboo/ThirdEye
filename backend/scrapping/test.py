import os
import requests
import pandas as pd
from bs4 import BeautifulSoup
from urllib.parse import urljoin

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

def main():
    # Input CSV file name
    csv_file = input("Enter the CSV file name (with path if not in the same directory): ")
    
    if not os.path.isfile(csv_file):
        print("File does not exist. Please check the file path.")
        return

    df = pd.read_csv(csv_file)
    urls = df['url']  # Make sure your CSV has a column named 'url'

    # Create media directory
    media_folder = 'media'
    os.makedirs(media_folder, exist_ok=True)

    for url in urls:
        folder_name = os.path.join(media_folder, url.split("//")[-1].replace('/', '_'))
        os.makedirs(folder_name, exist_ok=True)
        scrape_media_from_website(url, folder_name)

    print('Scraping completed! Check the media folder.')

if __name__ == '__main__':
    main()
