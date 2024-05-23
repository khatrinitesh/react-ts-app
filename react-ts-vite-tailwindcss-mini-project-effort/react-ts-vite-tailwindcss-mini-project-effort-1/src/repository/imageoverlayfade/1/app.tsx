import React from 'react'
import { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <ImageOverlay imageUrl="https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg"/>
    </>
  )
}

export default CustomApp

interface ImgOverlayProps{
    imgUrl:string;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageUrl }) => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
  
    const handleMouseEnter = () => {
      setShowOverlay(true);
    };
  
    const handleMouseLeave = () => {
      setShowOverlay(false);
    };
  
    return (
      <div className="image-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={imageUrl} alt="Overlay" />
        {showOverlay && <div className="overlay"></div>}
      </div>
    );
  };