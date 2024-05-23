import React from 'react'
import { useState } from 'react';
import './style.css';
import { FaPlus, FaMinus } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
        <ImageOverlay imageUrl="https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg" />
    </>
  )
}

export default CustomApp

interface ImageOverlayProps {
    imageUrl: string;
  }
  
  const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageUrl }) => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [zoomLevel, setZoomLevel] = useState<number>(1);
  
    const handleMouseEnter = () => {
      setShowOverlay(true);
    };
  
    const handleMouseLeave = () => {
      setShowOverlay(false);
    };
  
    const handleZoomIn = () => {
      setZoomLevel(zoomLevel + 0.1);
    };
  
    const handleZoomOut = () => {
      setZoomLevel(Math.max(0.1, zoomLevel - 0.1));
    };
  
    return (
      <div className="image-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={imageUrl} alt="Overlay" style={{ transform: `scale(${zoomLevel})` }} />
        {showOverlay && (
          <div className="overlay">
            <button className="zoom-button" onClick={handleZoomIn}><FaPlus /></button>
            <button className="zoom-button" onClick={handleZoomOut}><FaMinus /></button>
          </div>
        )}
      </div>
    );
  };
  