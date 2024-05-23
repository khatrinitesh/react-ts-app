import React from 'react'
import { useState } from 'react';
import './style.css';
import { FaAccusoft } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
        <ImageOverlay imageUrl="https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg" overlayTitle="headtitle" overlayText="Duis ipsum magna sit sit. Qui irure culpa enim eiusmod. Anim incididunt tempor est tempor sit irure minim sunt sunt consectetur occaecat irure sunt. Id incididunt est ea sit nulla tempor fugiat.

Reprehenderit sit reprehenderit voluptate cupidatat dolor voluptate laborum commodo aliquip ut laborum officia aliqua est. Culpa laboris dolor dolore aute. Sunt magna aute elit in Lorem non fugiat. Eiusmod ut veniam id deserunt consequat magna irure minim ea. Reprehenderit reprehenderit elit ipsum nisi nostrud excepteur. Sit elit deserunt aliqua duis pariatur consectetur officia consectetur incididunt non aliquip mollit nisi."/>
    </>
  )
}

export default CustomApp

interface ImageOverlayProps {
    imageUrl: string;
    overlayTitle: string;
    overlayText: string;
  }
  
  const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageUrl, overlayTitle, overlayText }) => {
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
        {showOverlay && (
          <div className="overlay">
            <h2 className="overlay-title">{overlayTitle}</h2>
            <p className="overlay-text">{overlayText}</p>
          </div>
        )}
      </div>
    );
  };
  