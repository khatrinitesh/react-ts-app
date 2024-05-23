import React, { useState, useEffect } from "react";
import "./style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { styled } from 'styled-components';


const CustomApp: React.FC = () => {

    const handleButtonClick = (message:string) => {
        console.log(message);
      };

  return (
    <>
      <IconButton onClick={() => handleButtonClick('facebook')} label="Click me" iconClass="fab fa-facebook"/>
      <IconButton onClick={() => handleButtonClick('linkedin')} label="Click me" iconClass="fab fa-linkedin"/>
      <IconButton onClick={() => handleButtonClick('twitter')} label="Click me" iconClass="fab fa-twitter"/>
      <IconButton onClick={() => handleButtonClick('youtube')} label="Click me" iconClass="fab fa-youtube"/>
      <IconButton onClick={() => handleButtonClick('google-plus')} label="Click me" iconClass="fab fa-google-plus"/>
    </>
  );
};

export default CustomApp;


interface IconButtonsProps {
    iconClass:string;
    onClick?:() => void;
    label?:string;
}

const IconButton: React.FC<IconButtonsProps> = ({iconClass,onClick,label}) => {
    return (
      <button onClick={onClick} className="icon-button">
        <i className={`fa ${iconClass}`}></i>
        {label && <span>{label}</span>}
      </button>
    );
  };