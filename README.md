# Hacker News Reader
This is a simple news app that retrieves and displays the latest news from Hacker News (https://news.ycombinator.com/). The app uses the official Hacker News API (https://github.com/HackerNews/API) to fetch the latest news stories, comments, and user information.

## Installation
To install the app, first clone this repository to your local machine:

`git clone https://github.com/your-username/hacker-news-reader.git`
Then, navigate to the project directory and install the dependencies:

`cd hacker-news-reader`
`npm install`

## Usage
To start the app, run the following command:
`npm start`

This will start the app in development mode and open it in your default web browser at http://localhost:3000.

To create a production build of the app, run the following command:
`npm run build`
This will create an optimized build of the app in the build directory.

## Configuration
The app retrieves news stories from the Hacker News API by default, but you can modify the API_ENDPOINT constant in src/constants.js to point to a different API endpoint if you prefer.

