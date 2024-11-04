# Media Scraper

A simple Flask application that allows users to upload a CSV file containing URLs. The application scrapes and downloads all images and videos from the provided URLs.

## Features

- Upload a CSV file containing URLs
- Scrape images and videos from each URL
- Store downloaded media files in a designated folder

## Requirements

Make sure you have Python installed. You can download it from [python.org](https://www.python.org/downloads/).

## Installation

1. **Clone the repository** (if applicable) or create a directory for the project.
   
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install required packages**. Use pip to install the necessary libraries:

   ```bash
   pip install Flask requests beautifulsoup4 pandas
   ```

3. **Create project structure**:

   Ensure your project directory contains the following structure:

   ```
   <project-directory>
   ├── app.py
   ├── uploads/
   ├── media/
   └── templates/
       └── index.html
   ```

   - `app.py`: The main Flask application file.
   - `uploads/`: Directory for storing uploaded CSV files (created automatically).
   - `media/`: Directory for storing downloaded media files (created automatically).
   - `templates/`: Directory for HTML templates.

4. **Create the HTML template**:

   Create the file `index.html` inside the `templates/` directory with the following content:

   ```html
   <!doctype html>
   <html lang="en">
   <head>
       <meta charset="utf-8">
       <title>Media Scraper</title>
   </head>
   <body>
       <h1>Upload CSV File</h1>
       <form method="post" enctype="multipart/form-data">
           <input type="file" name="file" accept=".csv">
           <input type="submit" value="Upload">
       </form>
   </body>
   </html>
   ```

## Running the Application

1. **Run the Flask app**:

   In your terminal, navigate to the project directory and run:

   ```bash
   python app.py
   ```

2. **Access the app**:

   Open your web browser and go to `http://127.0.0.1:5000`. You will see a file upload form.

3. **Upload a CSV file**:

   Ensure your CSV file contains a column named `url` with the URLs you want to scrape. Select the CSV file and click the "Upload" button.

## Notes

- **Respect Website Policies**: Before scraping any website, ensure you check its `robots.txt` file and terms of service to confirm that scraping is allowed.
- **Error Handling**: The application includes basic error handling; consider expanding it based on your needs.
- **Rate Limiting**: To avoid overwhelming servers, consider implementing a delay between requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Instructions to Use:

1. Save the above content in a file named `README.md` in your project directory.
2. Modify any sections as necessary, especially if you have specific repository links or licensing information.

This README provides clear instructions on how to install, run, and use your Flask media scraper application. Let me know if you need any more assistance!