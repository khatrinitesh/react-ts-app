import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

const CustomApp = () => {
  return <div>
    <Clock/>
  </div>;
};

export default CustomApp;

// Analog Clock component
const AnalogClock = tw.svg`
  w-24 h-24
`;

// Digital Clock component
const DigitalClock = tw.div`
  text-4xl font-bold
`;

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = 30 * (hours % 12) + 0.5 * minutes;
  const minuteRotation = 6 * minutes + 0.1 * seconds;
  const secondRotation = 6 * seconds;

  return (
    <>
      <div className="flex justify-center items-center">
        <AnalogClock viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="30"
            transform={`rotate(${hourRotation}, 50, 50)`}
            stroke="black"
            strokeWidth="3"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="20"
            transform={`rotate(${minuteRotation}, 50, 50)`}
            stroke="black"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="15"
            transform={`rotate(${secondRotation}, 50, 50)`}
            stroke="red"
            strokeWidth="1"
          />
        </AnalogClock>
        <DigitalClock>
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </DigitalClock>
      </div>
    </>
  );
};
