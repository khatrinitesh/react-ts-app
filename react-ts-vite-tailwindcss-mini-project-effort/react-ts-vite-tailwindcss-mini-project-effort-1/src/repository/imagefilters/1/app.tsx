import React from 'react'
import { useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <ImageFilters imageUrl="https://e1.pxfuel.com/desktop-wallpaper/312/649/desktop-wallpaper-human-intelligence-can-fix-artificial-intelligent-shortcomings-artificial-intelligence.jpg"/>
    </>
  )
}

export default CustomApp

interface ImageFiltersProps {
    imageUrl: string;
  }
  
  const ImageFilters: React.FC<ImageFiltersProps> = ({ imageUrl }) => {
    const [filter, setFilter] = useState<string>('none');
  
    const handleFilterChange = (newFilter: string) => {
      setFilter(newFilter);
    };
  
    return (
      <div className="image-filters">
        <div className="image-container" style={{ filter }}>
          <img src={imageUrl} alt="Original" />
        </div>
        <div className="controls">
          <button onClick={() => handleFilterChange('none')}>Original</button>
          <button onClick={() => handleFilterChange('grayscale(100%)')}>Grayscale</button>
          <button onClick={() => handleFilterChange('sepia(100%)')}>Sepia</button>
          <button onClick={() => handleFilterChange('blur(5px)')}>Blur</button>
          <button onClick={() => handleFilterChange('brightness(150%)')}>Brightness</button>
          <button onClick={() => handleFilterChange('contrast(200%)')}>Contrast</button>
        </div>
      </div>
    );
  };