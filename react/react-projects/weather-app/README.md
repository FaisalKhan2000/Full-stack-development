# Weather APP React

## Description

Weather App is a simple and intuitive application that provides current weather conditions and forecasts. Users can easily check the weather for their location and explore detailed forecasts. The app features a clean interface, a search functionality powered by react-select-async-paginate, and an accordion component created with react-accessible-accordion.

## Demo

Check out the live demo: [Weather App](https://weather-app-flash0p.netlify.app/)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Open Weather APi**: Used to fetch the weather data.
- **GeoDBAPI**: Used to fetch the city list.
- **Netlify**: Hosting platform for deploying the app.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FaisalKhan2000/Full-stack-development.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Full-stack-development/react/react-projects/weather-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## File Structure

Here is the file structure of your app:

```
src/
|-- components/
|   |-- current-weather/
|   |   |-- current-weather.css
|   |   |-- CurrentWeather.js
|   |-- forecast/
|   |   |-- forecast.css
|   |   |-- Forecast.js
|   |-- search/
|   |   |-- Search.js
|   |-- api.js
|-- App.css
|-- App.js
|-- index.js
```

## Components

### Current Weather

- **current-weather.css**: Styles for the Current Weather component.
- **CurrentWeather.js**: Implementation of the Current Weather component.

### Forecast

- **forecast.css**: Styles for the Forecast component.
- **Forecast.js**: Implementation of the Forecast component.

### Search

- **Search.js**: Implementation of the Search component using `react-select-async-paginate`.

## Dependencies

- **react-select-async-paginate**: Used for creating the search functionality.
- **react-accessible-accordion**: Used for creating an accordion component.

## API

- **api.js**: File containing API-related functionality.

### Weather API

Your app uses the OpenWeatherAPI for fetching forecast data. To set up the API key:

1. Go to [OpenWeatherAPI](https://openweathermap.org/) and sign up for an account.
2. Obtain your API key.

### Search API

Your app uses the GeoDB Cities API for location-based search. To set up the API key:

1. Go to [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities) and sign up for an account.
2. Obtain your API key.

## Getting Started

Include instructions on how to install and run your application. For example:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project folder: `cd your-repo`
3. Install dependencies: `npm install`
4. Run the app: `npm start`
