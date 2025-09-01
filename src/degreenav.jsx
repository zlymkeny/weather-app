import React, { useEffect, useState } from 'react';
import './App.css'

function WeatherApp() {
    const[weather, setWeather] = useState(null);
    const[error, setError] =useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Enugu&appid=5aede8faa236c6730b504520d2505d23&units=metric");
                const result = await response.json();
                if (!response.ok || result.cod !== 200) {
                    throw new Error(result.message || "Failed to fetch weather data");
                }
                setWeather(result);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return (<div style={{color: 'red'}}>Error: {error}</div>);
    }

    return (
    <div className="min-h-screen flex justify-center items-center font-sans text-white">
            {weather ? (
                <div className="flex flex-col items-center gap-4">
                    <div className="weather-container bg-blue-200 rounded-3xl p-8 w-[350px] shadow-2xl backdrop-blur-lg text-center border border-white/30 text-blue-900">
                        <h2 className="text-3xl font-bold mb-2 drop-shadow">{weather.name}</h2>
                        <p className="text-7xl font-thin mb-2 tracking-wide drop-shadow-lg">{weather.main.temp}°</p>
                        <p className="text-x1 mb-4 capitalize">{weather.weather[0].description}</p>
                        <span>H: {weather.main.temp_max}° </span>
                        <span>   L: {weather.main.temp_min}</span>
                        {/* <span>Humidity: {weather.main.humidity}%</span>
                        <span>Wind Speed: {weather.wind.speed} m/s</span> */}
                    </div>
                    <div className="weather-container bg-blue-200 rounded-3xl p-3 w-[350px] shadow-xl backdrop-blur-lg text-left">
                        Rainy conditions expected around 3pm. Wind gusts are up to 20km/h.
                        <hr className="my-4"/>
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex flex-col items-center">
                                <span className="text-xs">Now</span>
                                <span className="text-2xl">⛅</span>
                                <span className="text-sm">30°</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">3pm</span>
                                <span className="text-2xl">🌧️</span>
                                <span className="text-sm">30°</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">4pm</span>
                                <span className="text-2xl">🌧️</span>
                                <span className="text-sm">29°</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">5pm</span>
                                <span className="text-2xl">🌧️</span>
                                <span className="text-sm">29°</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-xs">6pm</span>
                                <span className="text-2xl">🌧️</span>
                                <span className="text-sm">28°</span>
                            </div>
                        </div>
                    </div>
                    <div className="weather-container bg-white/10 rounded-3xl p-3 w-[350px] shadow-xl backdrop-blur-lg text-left mt-2">
                        <span className="text-sm">
                            📝10-DAY FORECAST.</span>
                        <hr className="my-4"/>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default WeatherApp