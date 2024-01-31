import React, { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState([]);

  const handleSearch = async () => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3fbae7b585b6ce6d120ef35cf215e4fa`;
    const response = await axios.get(apiUrl);
    const data = response.data;
    setForecastData(data.list);
  };

  const getTodaysForecast = () => {
    const today = new Date().toDateString();
    return forecastData.find(item => new Date(item.dt * 1000).toDateString() === today);
  };

  const getNextFiveDaysForecast = () => {
    const today = new Date().toDateString();
    const nextFiveDaysForecasts = [];

    // Initialize an object to store forecasts for each day
    const forecastsPerDay = {};

    // Filter forecasts and store only one forecast per day
    forecastData.forEach(item => {
      const forecastDate = new Date(item.dt * 1000).toDateString();
      if (forecastDate !== today && !forecastsPerDay[forecastDate]) {
        forecastsPerDay[forecastDate] = true;
        nextFiveDaysForecasts.push(item);
      }
    });

    // Return only the next five days' forecasts
    return nextFiveDaysForecasts.slice(0, 5);
  };

  const todayForecast = getTodaysForecast();
  const nextFiveDaysForecast = getNextFiveDaysForecast();

  return (
    <>
      <div>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {todayForecast && (
          <div>
            <h2>Today's Forecast</h2>
            <p>{city}</p>
            <p>Weather: {todayForecast.weather[0].description}</p>
            <p>Cloud Cover: {todayForecast.clouds.all}%</p>
            <img src={`./${todayForecast.weather[0].icon}.svg`} alt="icons" />
          </div>
        )}
        {nextFiveDaysForecast.length > 0 && (
          <div>
            <h2>Next Five Days Forecast</h2>
            <ul>
              {nextFiveDaysForecast.map(item => (
                <li key={item.dt}>
                  <p>Date: {new Date(item.dt * 1000).toLocaleDateString()}</p> 
                  <p>Weather: {item.weather[0].description}</p>
                  <p>Cloud Cover: {item.clouds.all}%</p>
                  <p>Temperature: {item.main.temp - 273}°C</p>
                  <img src={`./${item.weather[0].icon}.svg`} alt="icons" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
