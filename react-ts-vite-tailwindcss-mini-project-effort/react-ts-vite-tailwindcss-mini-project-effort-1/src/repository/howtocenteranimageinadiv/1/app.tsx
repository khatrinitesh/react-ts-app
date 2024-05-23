import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp: React.FC = () => {

  return (
    <>
      <ImageCentering/>
    </>
  );
};

export default CustomApp;

const ImageCentering: React.FC = () => {
    return (
      <div className="container">
        <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Centered Image" className="centered-image" />
      </div>
    );
  };