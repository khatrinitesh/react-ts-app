import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default CustomApp;

const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-img">
        <div className="container">
          <div className="topnav">
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
        </div>
      </div>
    </>
  );
};
