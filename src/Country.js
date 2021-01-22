import React, { useState } from 'react';

const Country = ({ country }) => {

  const [query, setQuery] = useState(country.capital)
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          // console.log(result);
        });
    }
  }

  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
            </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
            ''
          )}
        <div>
          <h1>{country.name}</h1>
          <div>Capital: {country.capital}</div>
          <div>Population: {country.population/1000000} milj</div>
          <h2>Languages</h2>
          <ul>
            {country.languages.map(language => (
              <li key={language.iso639_1}>{language.name}</li>
            ))}
          </ul>
          <img src={country.flag} alt='empty' width='100' />
        </div>
      </main>
    </div>
  );
}

export default Country;




// <div>
//   <div>
//     <div>{weather.name}, {weather.sys.country}</div>
//   </div>
//   <div>
//     <div>
//       {Math.round(weather.main.temp)}°c
//             </div>
//     <div>{weather.weather[0].main}</div>
//   </div>
// </div>