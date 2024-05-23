import React, { useState, useEffect } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <div>CustomApp</div>
  )
}

export default CustomApp

const futureDate = new Date('2024-05-01T00:00:00'); // Change this to your desired future date

const calculateTimeLeft = () => {
  const difference = futureDate.getTime() - new Date().getTime();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CSPage:React:FC = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      });

      const timerComponents = Object.keys(timeLeft).map((interval) => {
        return (
          <span key={interval}>
            {timeLeft[interval]} {interval}{' '}
          </span>
        );
      });
    return(
        <>
        <div className="App">
      <header className="App-header">
        <h1>Coming Soon</h1>
        <div>
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span>Time's up!</span>
          )}
        </div>
      </header>
    </div>
        </>
    )
}