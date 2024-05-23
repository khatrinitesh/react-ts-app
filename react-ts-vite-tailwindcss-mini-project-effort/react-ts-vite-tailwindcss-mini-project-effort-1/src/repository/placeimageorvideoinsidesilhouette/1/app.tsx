import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <Silhouette imageUrl="https://w0.peakpx.com/wallpaper/390/568/HD-wallpaper-artificial-intelligence-background-vectors-stock-psd-vision.jpg" />
    </>
  );
};

export default CustomApp;

interface SilhouetteProps {
  imageUrl: string;
}

const Silhouette: React.FC<SilhouetteProps> = ({ imageUrl }) => {
  return (
    <div class="container"> 
    <div class="main"> 
      <img src={imageUrl}/> 
    </div> 
  </div> 
  );
};
