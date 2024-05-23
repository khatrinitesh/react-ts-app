import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
  return <>
    <h1>Shake an Image</h1>
      <Shake imageUrl="https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg" shakeOnHover shakeOnClick />
  </>;
};

export default CustomApp;

interface ShakeProps {
  imageUrl: string;
  shakeOnHover?: boolean;
  shakeOnClick?: boolean;
}

const Shake: React.FC<ShakeProps> = ({ imageUrl, shakeOnHover = false, shakeOnClick = false }) => {
    const [isShaking, setIsShaking] = useState(false);
  
    const handleMouseEnter = () => {
      if (shakeOnHover) {
        setIsShaking(true);
      }
    };
  
    const handleMouseLeave = () => {
      if (shakeOnHover) {
        setIsShaking(false);
      }
    };
  
    const handleClick = () => {
      if (shakeOnClick) {
        setIsShaking(true);
        setTimeout(() => {
          setIsShaking(false);
        }, 1000); // Adjust the duration as needed
      }
    };
  
    return (
      <img
        src={imageUrl}
        alt="Shaking Image"
        className={isShaking ? "shake" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
    );
  };
  
