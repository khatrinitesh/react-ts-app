import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
 
  return (
    <>
    <MaterialTextField/>
    </>
  );
};

export default CustomApp;

const MaterialTextField: React.FC = () => {
    return (
      <div className="container">
        <div className="material-textfield">
          <input placeholder=" " type="text" />
          <label>Label</label>
        </div>
      </div>
    );
  };
  

