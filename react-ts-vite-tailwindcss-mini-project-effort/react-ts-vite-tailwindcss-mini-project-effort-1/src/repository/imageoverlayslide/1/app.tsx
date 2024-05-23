import React from 'react'
import { useState } from 'react';
import './style.css';
import { FaAccusoft } from "react-icons/fa";

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
        {showOverlay && (<>
            <div className="overlay d-flex items-center justify-center w-full h-full">
            <FaAccusoft  className="icon text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
            </div></>)}
      </div>
    );
  };