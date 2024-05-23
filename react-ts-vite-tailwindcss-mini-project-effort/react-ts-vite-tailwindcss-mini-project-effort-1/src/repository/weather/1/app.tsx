import React ,{useState ,useEffect }from 'react'
import WeatherHeader from './WeatherHeader';
import WeatherBody from './WeatherBody';
import WeatherInfo from './WeatherInfo';
import './style.css';

const CustomApp = () => {
    const [currCity, setCurrCity] = useState<string>("London");
    const [units, setUnits] = useState<string>("metric");
  
    useEffect(() => {
      getWeather();
    }, []);
  
    const convertTimeStamp = (timestamp: number, timezone: number): string => {
      // Your timestamp conversion logic here
      return '';
    };
  
    const convertCountryCode = (country: string): string => {
      // Your country code conversion logic here
      return '';
    };
  
    const getWeather = () => {
      const API_KEY = '64f60853740a1ee3ba20d0fb595c97d5';
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`)
        .then(res => res.json())
        .then(data => {
          // Your weather data handling logic here
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
        });
    };
  
  return (
    <>
         <WeatherHeader />
      <WeatherBody />
      <WeatherInfo />
    </>
  )
}

export default CustomApp
