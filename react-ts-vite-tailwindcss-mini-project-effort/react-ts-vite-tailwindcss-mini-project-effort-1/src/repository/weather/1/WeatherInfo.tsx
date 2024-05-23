// WeatherInfo.tsx

import React from 'react';
import { FaCompress,FaGaugeSimple,FaWind,FaRegSun,FaTemperatureEmpty } from 'react-icons/fa';

const WeatherInfo: React.FC = () => {
  return (
    <div className="weather__info">
      <div className="weather__card">
      <FaWind />

        <div>
          <p>Real Feel</p>
          <p className="weather__realfeel">18&#176;</p>
        </div>
      </div>
      <div className="weather__card">
      <FaWind />

        <div>
          <p>Humidity</p>
          <FaRegSun />

        </div>
      </div>
      <div className="weather__card">
      <FaWind />

        <div>
          <p>Wind</p>
          <FaWind />

        </div>
      </div>
      <div className="weather__card">
      <FaWind />
        <div>
          <p>Pressure</p>
          <FaCompress />
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
