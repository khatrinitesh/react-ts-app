import React, { useState, useEffect } from "react";
import "./style.css";
// import { styled } from 'styled-components';


const CustomApp: React.FC = () => {

  return (
    <>
      <YourComponent/>
    </>
  );
};

export default CustomApp;

const YourComponent: React.FC = () => {
  return (
    <div>
      {/* Other content */}
      <input type="number" />
      {/* More content */}
    </div>
  );
};