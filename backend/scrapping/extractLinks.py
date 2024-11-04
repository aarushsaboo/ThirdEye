import requests
from bs4 import BeautifulSoup
import csv
from urllib.parse import urljoin, urlparse

def get_all_links(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')
        links = []
        
        for link in soup.find_all('a'):
            href = link.get('href')
            if href:
                absolute_url = urljoin(url, href)
                parsed_url = urlparse(absolute_url)
                if parsed_url.netloc == urlparse(url).netloc:
                    links.append(absolute_url)
        
        return links
    except Exception as e:
        print(f"Error fetching {url}: {str(e)}")
        return []

def scrape_and_save_links(start_url, output_file):
    all_links = set()
    
    def crawl(url):
        links = get_all_links(url)
        for link in links:
            if link not in all_links:
                all_links.add(link)
                crawl(link)
    
    crawl(start_url)
    
    with open(output_file, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["URL"])  # Header row
        writer.writerows([[link] for link in all_links])

if __name__ == "__main__":
    start_url = input("Enter the website URL: ")
    output_file = "scraped_links.csv"
    scrape_and_save_links(start_url, output_file)
    print(f"Scraping completed. Links saved to {output_file}")
