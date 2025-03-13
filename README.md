# Weather App

## Prerequisites

- **Node.js and npm**: Ensure you have Node.js and npm installed.
- **OpenWeatherMap API Key**: Provided to you during the interview.

## Installation

1. Clone the repository: `git clone https://github.com/annaowens/weather-app.git` 
2. Navigate to `cd weather-app`.
3. Install dependencies using `npm install`.
4. Add the OpenWeatherMap API key provided during the interview directly in `App.js` at `const API_KEY = 'your_openweathermap_api_key'`.

## Usage

1. Start the development server with `npm start`.
2. Open your browser and navigate to `http://localhost:3000`.

## Data Source

The weather data displayed in this application is fetched from the [OpenWeatherMap API](https://openweathermap.org/api). This API provides current weather data for any location, including over 200,000 cities. You will need an API key to access the data, which is provided to you during the interview.

## Technical Screen

### Required Tasks

- **Implement Loading State**: Show a loading indicator while fetching data.
- **Handle API Errors Gracefully**: Display user-friendly messages for invalid input errors.

### Bonus Tasks

- **Add a 5-day Forecast**: Extend the app to fetch and display a multi-day weather forecast.
- **Use Local Storage**: Save the last searched city and retrieve it on page reload.
- **Deploy the App**: Deploy it using a service like Vercel or Netlify.


## Design Screen

### Required Tasks

- **Improve the UI**: Enhance the design using CSS or a UI framework of your choice.
