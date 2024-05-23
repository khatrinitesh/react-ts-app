// WeatherHeader.tsx

import React from 'react';

const WeatherHeader: React.FC = () => {
  return (
    <div className="weather__header">
      <form className="weather__search">
        <input type="text" placeholder="Search for a city..." className="weather__searchform" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
      <div className="weather__units">
        <span className="weather_unit_celsius">&#176;C</span>
        <span className="weather_unit_farenheit">&#176;F</span>
      </div>
    </div>
  );
};

export default WeatherHeader;
