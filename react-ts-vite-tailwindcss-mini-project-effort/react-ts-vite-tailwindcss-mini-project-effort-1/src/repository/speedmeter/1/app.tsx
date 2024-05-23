import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <SpeedMeter/>
    </>
  )
}

export default CustomApp

const SpeedMeter: React.FC = () => {
    const [speed, setSpeed] = useState(0);
  
    // Calculate rotation angle based on speed value
    const rotation = (speed / 180) * 270 - 45;
  
    return (
      <div className="flex items-center justify-center">
        <div className="relative w-40 h-40">
          {/* Speed meter background */}
          <svg className="absolute w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#ccc" strokeWidth="2" />
            <line x1="50" y1="10" x2="50" y2="20" stroke="#ccc" strokeWidth="2" />
            <line x1="50" y1="80" x2="50" y2="90" stroke="#ccc" strokeWidth="2" />
            <line x1="10" y1="50" x2="20" y2="50" stroke="#ccc" strokeWidth="2" />
            <line x1="80" y1="50" x2="90" y2="50" stroke="#ccc" strokeWidth="2" />
          </svg>
          {/* Speed meter needle */}
          <div className="absolute top-0 left-0 w-full h-full transform" style={{ transform: `rotate(${rotation}deg)` }}>
            <svg width="100" height="100" viewBox="0 0 100 100">
              <polygon points="50,5 55,15 45,15" fill="black" />
              <circle cx="50" cy="50" r="5" fill="black" />
            </svg>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="180"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="ml-4"
        />
      </div>
    );
  };