import React, { useState,useEffect } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <FlexboxExample/>
    </>
  );
};

export default CustomApp;

const FlexboxExample: React.FC = () => {
    return (
      <div className="flex-container">
        <div className="flex-item">Item 1</div>
        <div className="flex-item">Item 2</div>
        <div className="flex-item">Item 3</div>
      </div>
    );
};