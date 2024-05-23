import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp: React.FC = () => {

  return (
    <>
      <CenteredText/>
    </>
  );
};

export default CustomApp;

const CenteredText: React.FC = () => {
    return (
      <div className="container">
        <div className="centered-text">
          <p>Vertically Centered Text</p>
        </div>
      </div>
    );
  };