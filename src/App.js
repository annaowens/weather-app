import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const API_KEY = 'your_openweathermap_api_key';

  const fetchWeather = async () => {
    if (!city) return;

    setWeather(null);

    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const geoData = await geoResponse.json();
    const { lat, lon } = geoData[0];

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const weatherData = await weatherResponse.json();
    setWeather({
      city: geoData[0].name,
      country: geoData[0].country,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={fetchWeather}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Get Weather
        </button>
      </div>

      {weather && (
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h2 className="text-lg font-semibold">
            {weather.city}, {weather.country}
          </h2>
          <p className="text-gray-700 capitalize">{weather.description}</p>
          <p className="text-xl font-bold">{weather.temperature}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            className="mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
