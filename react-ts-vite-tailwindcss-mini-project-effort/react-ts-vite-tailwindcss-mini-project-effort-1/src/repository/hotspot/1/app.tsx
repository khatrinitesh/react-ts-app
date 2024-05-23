import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp: React.FC = () => {
  const handleHotspotClick = () => {
    alert("Hotspot clicked!");
  };

  return (
    <>
      <div className="container">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"
          alt="Background"
          className="background-image"
        />
        <HotSpot x={50} y={50} onClick={handleHotspotClick} />
      </div>
    </>
  );
};

export default CustomApp;

interface HotSpotProps {
  x: number;
  y: number;
  onClick: () => void;
}

const HotSpot: React.FC<HotSpotProps> = ({ x, y, onClick }) => {
  return (
    <div
      className="hotspot"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
    >
      <div className="hotspot-marker"></div>
    </div>
  );
};
