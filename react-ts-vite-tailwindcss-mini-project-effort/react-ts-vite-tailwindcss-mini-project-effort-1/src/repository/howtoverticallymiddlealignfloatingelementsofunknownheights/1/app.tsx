import React, { useState, useEffect } from "react";
import "./style.css";
// import { styled } from 'styled-components';


const CustomApp: React.FC = () => {

  return (
    <>
      <FloatingElements/>
    </>
  );
};

export default CustomApp;

const FloatingElements: React.FC = () => {
    return (
      <div className="container">
        <div className="floating-element">Element 1</div>
        <div className="floating-element">Element 2</div>
        <div className="floating-element">Element 3</div>
        {/* Add more floating elements as needed */}
      </div>
    );
  };