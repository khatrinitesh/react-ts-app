import React from 'react'
import { useState } from 'react';
import './style.css';
import { FaPlus, FaMinus } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
        <ImageWithText imageUrl="https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg" />
    </>
  )
}

export default CustomApp

interface ImageOverlayProps {
    imageUrl: string;
    overlayText:string;
    textPosition:string;
  }
  
  const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl }) => {
    return (
      <div className="container">
        <img src={imageUrl} alt="Snow" style={{ width: '100%' }} />
        <div className="bottom-left">Bottom Left</div>
        <div className="top-left">Top Left</div>
        <div className="top-right">Top Right</div>
        <div className="bottom-right">Bottom Right</div>
        <div className="centered">Centered</div>
      </div>
    );
  };
  