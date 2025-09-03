import React, { useEffect, useState } from 'react';
import './App.css'

function WeatherApp() {
    const[weather, setWeather] = useState(null);
    const[error, setError] =useState(null);

    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const API_URL = import.meta.env.VITE_APP_API_URL; 

    console.log("API Key:", API_KEY); 
      console.log("API URL:", API_URL); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/weather?q=Enugu&appid=${API_KEY}&units=metric`);
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
    }, [API_KEY, API_URL]);

    if (error) {
        return (<div style={{color: 'red'}}> Error: {error}</div>);
    }
        
return (
  <div className="min-h-screen flex justify-center items-center font-sans text-white relative overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      src="/cloud vid.mp4"
    />

    <div className="relative z-10 w-full flex justify-center items-center">
      {weather ? (
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="weather-container bg-white-10 rounded-3xl p-8 w-[350px] shadow-2xl backdrop-blur-lg text-center border border-white/30 text-white-100">
            <h3>MY LOCATION</h3>
            <h2 className="text-3xl font-bold mb-2 drop-shadow">{weather.name}</h2>
            <p className="text-7xl font-thin mb-2 tracking-wide drop-shadow-lg">{Math.ceil(weather.main.temp)}°</p>
            <p className="text-x1 mb-4 capitalize">{weather.weather[0].description}</p>
            <span className='font-bold'>H: {Math.ceil(weather.main.temp_max)}° </span>
            <span className='font-bold'>   L: {Math.ceil(weather.main.temp_min)}</span>
          </div>
          <div className="weather-container bg-white-19 rounded-3xl p-3 w-[350px] shadow-xl backdrop-blur-lg">
            <p>Cloudy conditions expected around this time. Winds light and variable.</p>
            <hr className="my-4"/>
            <div className="flex justify-between items-center mt-4">
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold">Now</span>
                <span className="text-2xl">⛅</span>
                <span className="text-base font-bold">30°</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold uppercase">3pm</span>
                <span className="text-2xl">🌧️</span>
                <span className="text-base font-bold">30°</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold uppercase">4pm</span>
                <span className="text-2xl">🌧️</span>
                <span className="text-base font-bold">29°</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold">5PM</span>
                <span className="text-2xl">🌧️</span>
                <div className='flex flex-col items-center leading-tight'>
                <span className='text-[8px] '>35%</span>
                <span className="text-base font-bold mt--1">29°</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold">6PM</span>
                <span className="text-2xl">🌧️</span>
                <span className="text-base font-bold">28°</span>
              </div>
            </div>
          </div>
          <div className="weather-container bg-white/10 rounded-3xl p-3 w-[350px] shadow-xl backdrop-blur-lg text-left mt-2">
            <span className="text-sm">
              📝10-DAY FORECAST.</span>
            <hr className="my-4"/>
            <div className='flex flex-col gap-3'>
              <span className='flex flex-row gap-3 justify-between'>
              <p>MONDAY</p>
              <p>🌧️</p>
              <p>30°</p>
              <p>-------</p>
              <p>29°</p>
              </span>
              <hr />
              <span className='flex flex-row gap-3 justify-between'>
              <p>TUESDAY</p>
              <p>🌧️</p>
              <p>39°</p>
              <p>-------</p>
              <p>23°</p>
              </span>
              <hr />
              <span className='flex flex-row gap-2 justify-between'>
              <p>WEDNESDAY</p>
              <p>🌧️</p>
              <p>30°</p>
              <p>-------</p>
              <p>39°</p>
              </span>   
              <hr />
              <span className='flex flex-row justify-between'>
              <p>THURSDAY</p>
              <p>🌧️</p>
              <p>34°</p>
              <p>-------</p>
              <p>29°</p> 
              </span>          
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
);
}

export default WeatherApp