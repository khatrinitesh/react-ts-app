import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <InputWithPlaceholderColor placeholder="Enter your text..."/>
    </>
  );
};

export default CustomApp;

interface InputWithPlaceholderColorProps {
    placeholder: string;
  }

const InputWithPlaceholderColor: React.FC<InputWithPlaceholderColorProps> = ({ placeholder }) => {
  return (
    <div class="container"> 
    <input type="text" placeholder={placeholder} className="input-with-placeholder" />
  </div> 
  );
};
