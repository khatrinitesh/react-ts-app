import React, { useState, useEffect } from "react";
// import "./style.css";

const CustomApp = () => {
  return <div>
    <h1>Pseudo Elements Example</h1>
    <PseudoElementComponent/>
  </div>;
};

export default CustomApp;

const PseudoElementComponent: React.FC = () => {
  return (
    <>
      <div className="relative w-64 h-64 bg-gray-300">
        <div className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-blue-500 opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <p className="text-white text-2xl">Content</p>
        </div>
      </div>
    </>
  );
};
