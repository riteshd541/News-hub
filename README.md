# News Hub
<<<<<<< HEAD

Deployed Link :

```sh
https://news-hub-by-ritesh.netlify.app/
```
=======
Link :
```sh
https://news-hub-by-ritesh.netlify.app/
```
"This deployed link of the website works perfectly; however, due to limitations with the News API in online deployment, new articles are not rendering after login on the home page, as the NewsAPI requires paid plans to access their links post-deployment."
>>>>>>> e4b25d9ddedbcaf7b2d4d849a2285bb3168823ad

## Project Description:

This project is a React web application that provides a user-friendly interface to view and interact with news articles. It allows users to sign up, log in, and view a list of news articles fetched from an API. The app includes a responsive navigation bar, a welcome message for users, and the option to view news articles in grid or list view. Each news item is linked to a detailed page displaying the full article.

## Table of Contents

- Installation
- Features
- Technologies Used
- Usage
- API Integration
- Remaining Tasks and Planned Features

## Installation

To run the project locally, follow these steps:

Clone the repository to your local machine:

```sh
git clone https://github.com/riteshd541/News-hub.git
```

Install the dependencies and devDependencies and start the server.

```sh
cd News-hub
npm install
```

Start the development server:

```sh
npm start
```

## Features

- User registration and login functionality using Firebase Authentication.
- A responsive navigation bar with app name and sign-out button.
- A welcome message and a brief introduction to the app on the home page.
- Display news articles fetched from an external API in grid or list view.
- Each news item has a "View more" button that links to a detailed page for the selected article.

## Technologies Used

In this News app,i used a number of open source projects to work properly:

- React - A JavaScript library for building user interfaces.
- React Router DOM: Used for routing and navigation within the application.
- Axios: A popular HTTP client for making API calls.
- Firebase: Used for user authentication and data storage.
- Bootstrap: Provides pre-designed CSS styles for faster and easier UI development.

And of course News Feed itself is open source with a [public repository][dill]
on GitHub.

## Usage

- Sign Up and Login: Users can sign up with their email and password or log in if they already have an account.
- Home Page: After logging in, users are greeted with a welcome note and an app introduction.
- View News Articles: Users can view news articles on the home page in grid or list view.
- View Detailed Article: Clicking on the "View more" button for a specific article will lead to a new page displaying the full details of that article.
- Sign Out: Users can sign out by clicking the sign-out button in the navigation bar.

## API Integration

This project utilizes the News API to fetch news articles and display them in the application. The API provides endpoints to retrieve a list of news items with relevant information, such as title, description, and publication date.

### 1- Importing Axios:

The implementation starts by importing the Axios library, which is a popular JavaScript library used to make HTTP requests. Axios simplifies the process of making API calls and handling responses.

```sh
import axios from "axios";
```

### 2- API Request:

The function fetchData is an asynchronous function that performs an API request to the NEWS API to fetch top headlines from India. The axios.get method is used to make a GET request to the provided API endpoint.

### 3-Understanding the API Endpoint:

The API endpoint used in the axios.get call is a URL provided by the NEWS API. In this case, the URL fetches the top headlines from India using the country parameter set to "in" (India) and the apiKey parameter, which is appended to the URL to authenticate the request.

The API endpoint structure:

```sh
https://api.currentsapi.services/v1/latest-news?apiKey=YOUR_API_KEY
```

- https://newsapi.org: The base URL of the NEWS API.
- /v2/top-headlines: The specific endpoint to get top headlines.
- ?country=in: The query parameter to specify the country as India (in is the country code for India).
- &apiKey=abe84282a0f544b7a9af729f4b2b0c02: The API key required to authenticate the request.

### 4-Understanding the API Endpoint:

- The await keyword is used before the axios.get method to make sure the function waits for the response from the API before proceeding. The response is stored in the response variable.
- The API response contains a JSON object with various properties, including the articles property, which holds an array of news articles. The code sets this array of articles into the data state variable using the setData function.

### 5-Error Handling:

The implementation includes error handling using a try-catch block. If there is an error while fetching data from the API, the catch block will catch the error, and the error message will be logged to the console using console.error.

### Remaining Tasks and Planned Features:

Due to a shortage of time, there are some exciting features that was planned to implement in the future to enhance the functionality and user experience of the news app. Here are the remaining tasks, listed in sequential order of priority:

### Favorite Articles:

To make the app more user-centric, I plan to add the ability for users to mark articles as favorites. This feature will enable users to keep track of their preferred articles and access them easily in the future. The user's favorite article preferences will be stored in Firebase for persistence across sessions.

### Offline Support:

Offline support is crucial to ensure a seamless user experience even when users are not connected to the internet. I intend to implement caching mechanisms that will allow users to read previously fetched news articles even when they are offline. This way, users can continue to access their saved articles and catch up on the latest news, regardless of their internet connectivity.


### Screenshots

![Sign_Up](https://github.com/riteshd541/News-hub/assets/123566634/00bfef30-b4b9-49af-8f09-f5979cecb491)
![Login](https://github.com/riteshd541/News-hub/assets/123566634/2efdf6ff-6be6-4051-a44b-788c4d9f4e43)
![Homepage](https://github.com/riteshd541/News-hub/assets/123566634/797a5395-998a-47b2-a250-be1533ad4e00)
![Gridview](https://github.com/riteshd541/News-hub/assets/123566634/fa858860-231f-4a8f-99b0-e48231e15089)




