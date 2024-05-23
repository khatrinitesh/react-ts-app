import React, { useState, useEffect } from "react";

const CustomApp = () => {
  return (
    <>
        <CountdownTimer initialTime={60} /> {/* Set initial time to 60 seconds */}

    </>
  )
}

export default CustomApp

interface TimeProps {
    initialTime:number
}

const CountdownTimer: React.FC<TimeProps> = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
  
    useEffect(() => {
      // Update the timer every second
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
  
      // Cleanup the timer
      return () => clearInterval(timer);
    }, []);
  
    // Format the time to display minutes and seconds
    const formattedTime = `${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`;
  
    return (
      <div>
        <h1>Countdown Timer</h1>
        <p>Time Left: {formattedTime}</p>
      </div>
    );
  };