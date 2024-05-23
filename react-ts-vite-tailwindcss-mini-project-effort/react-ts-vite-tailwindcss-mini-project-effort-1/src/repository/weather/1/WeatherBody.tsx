// WeatherBody.tsx

import React from 'react';

const WeatherBody: React.FC = () => {
  return (
    <div className="weather__body">
      <h1 className="weather__city"></h1>
      <div className="weather__datetime"></div>
      <div className="weather__forecast"></div>
      <div className="weather__icon"></div>
      <p className="weather__temperature"></p>
      <div className="weather__minmax">
        <p>Min: 12&#176;</p>
        <p>Max: 16&#176;</p>
      </div>
    </div>
  );
};

export default WeatherBody;
