import React, { useState, useEffect } from 'react';

const Fetch = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {      
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Nyeri&appid=3fbae7b585b6ce6d120ef35cf215e4fa`)
            .then((response) => response.json())
            .then((data) => {
                setWeather(data);
            });
    }, []);

    return (
        <div>
            <h2>Weather Forecast</h2>
            {weather && (
                <div>
                    <p>Town: {weather.city.name}</p>
                    {weather.list.map((forecast, index) => (
                        <div key={index}>
                            
                            <p>Date: {forecast.dt_txt}</p>
                            <p>Temperature: {forecast.main.temp}</p>
                            <p>Weather: {forecast.weather[0].description}</p>
                            <img src={`../${forecast.weather[0].icon}.svg`} alt="icon" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Fetch;
