import React, { useState } from "react";
import Slider from 'react-slider';

const CustomApp = () => {
  return (
    <>
     <h1>Image Comparison Slider</h1>
     <ImageComparisonSlider leftImageUrl="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" rightImageUrl="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"/>
    </>
  )
};

export default CustomApp;

interface ImageComparisonSliderProps {
    leftImageUrl: string;
    rightImageUrl: string;
  }

const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({ leftImageUrl, rightImageUrl }) => {
    const [position, setPosition] = useState<number>(50);
  
    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPosition(parseInt(event.target.value, 10));
    };
  
    return (
      <div className="image-comparison-slider">
        <img src={leftImageUrl} alt="Before" style={{ width: `${position}%` }} />
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={handleSliderChange}
          className="slider"
        />
        <img src={rightImageUrl} alt="After" style={{ width: `${100 - position}%` }} />
      </div>
    );
  };