                                                        Weather Application

Welcome to the Weather Application! This project provides real-time weather information for any city you search. It uses the OpenWeather API to retrieve current weather data, and you can filter results by date and switch between temperature units (Celsius or Fahrenheit). This project demonstrates an interactive and responsive weather information app with modern functionalities and a user-friendly interface.

Table of Contents

    • Features
    • Setup and Installation
    • Usage
    • Functionality
    • API Key Setup
    • Technologies Used
    • Assumptions and Decisions

Features

1. Search City Weather: Enter any city name and get real-time weather information.
2. City Search Autocomplete: As you type, the app suggests city names starting with the entered letters.
3. Weather by Specific Date: Choose a date from a date picker and get weather data for that specific day.
4. Unit Conversion: Easily toggle between Celsius (°C) and Fahrenheit (°F) for temperature readings.
5. Error Handling: Displays a friendly message when an invalid city name is entered, and provides toast notifications for success or error messages.

Setup and Installation

Step-by-Step Instructions:

Follow these instructions to set up and run the project locally.

1. Clone the Repository
   To get started, clone the repository using the following commands in your terminal:

Code:

    git clone https://github.com/Dayswelive/weather-application.git

    cd weather-application

    cd weather-application

    Note: You will need to navigate into the nested weather-application directory twice as it's set up in a nested structure.

2.  Install Dependencies
    Once inside the project directory, install the necessary dependencies using npm:
    Code:

        	npm install

This will install all the dependencies required for the project.

3. Start the Project
   After the installation is complete, you can start the project by running:

Code:
npm start

This will launch the application on your local server, and you can view it by navigating to http://localhost:3000 in your browser.

Usage
Once the application is running, you will be presented with an interface to interact with the weather application.

Search City Weather

    • Type a city name into the search bar.
    • As you type, a list of suggestions will appear, allowing you to select the city from the dropdown.
    • Once you select the city, the app fetches weather data and displays it on the screen.

Unit Conversion

    • The temperature can be viewed in either Celsius (°C) or Fahrenheit (°F).
    • Toggle between these units using the buttons located in the top-right of the interface.

Date-Specific Weather

    • Choose a date from the date picker to view weather data for that specific day.
    • A modal will pop up with the weather details for the selected date.

Error Handling

    • If a city name that does not exist or is misspelled is entered, the app will show a friendly error message.
    • The app also displays toast notifications for success and failure states, making it easy to understand when the weather data has been retrieved successfully or when an error has occurred.

Functionality

This weather application is designed to provide users with the ability to interactively search for weather information and filter data in various ways. Below is an overview of the key functionalities provided in the app:

1. Search Your City and Get Weather Information

   The core feature of the app is the ability to search for a specific city and retrieve its weather forecast. By typing the city name into the search bar, users can get weather information for the chosen city, including temperature, humidity, and general weather conditions (e.g., clear skies, cloudy, etc.).

2. City Search Functionality

   As you begin typing the city name in the search bar, the app automatically shows suggestions of cities that match your input. This autocomplete feature is powered by the OpenWeather API, which provides a list of potential matches based on the letters typed by the user.

3. Check the Weather of a Particular Date

   You can select a specific date using the date picker in the UI. Once a date is selected, a modal will appear with detailed weather information for that day. This allows you to easily view historical data and forecast information based on the date you choose.

4. Convert Temperature to Celsius or Fahrenheit

   The app allows you to toggle between Celsius and Fahrenheit units. There are two buttons at the top-right corner of the page labeled "°C" and "°F", which allow for easy switching between the two temperature scales. The temperature values are converted on the fly to reflect the chosen unit.

API Key Setup

To use the OpenWeather API, you need to create your own API key. Follow these steps to get your API key and configure the app:

    1. Go to the OpenWeather API website and sign up for an account.

    2. After signing up, log in to your account and navigate to the API keys section.

    3. Click on Create Key to generate your personal API key.

    4. Once you have your API key, create a .env file in the root of

Your project folder and add the following line:

Code:

    REACT_APP_API_KEY=your_api_key_here

Replace your_api_key_here with the actual key you got from OpenWeather.

5.  In your weatherApi.js file, make sure to reference the API
    key from your .env file using process.env.REACT_APP_API_KEY:
    Code:

        	const API_KEY = process.env.REACT_APP_API_KEY;

Technologies Used

This weather application uses the following technologies:

    • React.js: A JavaScript library for building user interfaces.
    • React Toastify: This is used to display success and error notifications.
    • OpenWeather API: This is used to fetch real-time weather data and city suggestions.
    • CSS: For custom styling of the user interface.
    • DatePicker: For selecting specific dates to filter weather data.

Assumptions and Decisions

    1. Assumption: The user will have access to the internet since the app relies on live API data from OpenWeather.
    2. Decision: The default unit of temperature is set to Celsius (°C), and users can switch between Celsius and Fahrenheit as needed.
    3. Decision: If a city is not found, the app gracefully handles the error with a friendly toast notification, and the search bar remains available for new inputs.

Conclusion

This Weather Application provides a simple, interactive way for users to search for real-time weather information, toggle between temperature units, and view data for specific dates. The use of modern UI libraries like React and Toastify ensures a smooth user experience. We hope you find it useful and easy to use!
