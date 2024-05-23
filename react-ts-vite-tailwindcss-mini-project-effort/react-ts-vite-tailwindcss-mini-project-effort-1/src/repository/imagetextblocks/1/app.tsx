import React from "react";
import { useState } from "react";
import "./style.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
      <ImageWithText imageUrl="https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg" />
    </>
  );
};

export default CustomApp;

interface ImageOverlayProps {
  imageUrl: string;
  overlayText: string;
  textPosition: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl }) => {
  return (
    <div className="container">
      <img
        src="https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg"
        alt="Norway"
        style={{width:'100%'}}
      />
      <div className="text-block">
        <h4>Nature</h4>
        <p>What a beautiful sunrise</p>
      </div>
    </div>
  );
};
