import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <FlipBox />
    </>
  );
};

export default CustomApp;

const FlipBox: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className={`flip-box ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h2>Front Side</h2>
          </div>
          <div className="flip-box-back">
            <h2>Back Side</h2>
          </div>
        </div>
      </div>
    );
  };