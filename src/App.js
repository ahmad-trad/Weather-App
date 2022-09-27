import './App.css';
import {fetchWeather} from './Api/fetchWeith'
import { useState } from 'react';

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) =>{
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  } 

  return (
    <div className="main-container">
      <input 
        type='text'
        className='search'
        placeholder='Search Of The Country Weather...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather.name && (
        <div className='city'>
          <h1 className='city-name'>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h1>
          <div className='city-temp'>
            {Math.round(weather.main.temp)}
            <sup>&deg;c</sup>
          </div>
          <div className='info'>
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
