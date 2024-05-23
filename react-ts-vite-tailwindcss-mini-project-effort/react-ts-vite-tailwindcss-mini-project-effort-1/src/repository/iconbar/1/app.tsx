import React, { useState, useEffect } from "react";
import "./style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { styled } from 'styled-components';


const CustomApp: React.FC = () => {

  return (
    <>
      <IconBar/>
    </>
  );
};

export default CustomApp;

const IconBar: React.FC = () => {
    return (
      <div className="icon-bar">
        <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" className="google"><i className="fab fa-google"></i></a>
        <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="youtube"><i className="fab fa-youtube"></i></a>
      </div>
    );
  };