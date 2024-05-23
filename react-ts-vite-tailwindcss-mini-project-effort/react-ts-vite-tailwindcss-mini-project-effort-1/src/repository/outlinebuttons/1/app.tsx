import React, { useState,useEffect  } from "react";
// import "./style.css";

const CustomApp = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
    
  
  return (
    <>
      < OutlineBtn onClick={handleClick} text="Click me"/>
      <OutlineBtn text="Another Button" className="custom-class" />
    </>
  );
};

export default CustomApp;

interface OutlineBtnProps{
    text:string;
    onClick:() => void;
    className?:string;
}

const OutlineBtn:React.FC<OutlineBtnProps> = ({text,onClick,className}) => {
    return(
        <>
         <button className={`outline-button ${className ? className : ''}`} onClick={onClick}>{text}</button>
        </>
    )
}