import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp: React.FC = () => {

  return (
    <>
      <Sidebar/>
    </>
  );
};

export default CustomApp;

const Sidebar: React.FC = () => {
    return (
      <div className="sidebar">
        <button className="sidebar-button">Button 1</button>
        <button className="sidebar-button">Button 2</button>
        <button className="sidebar-button">Button 3</button>
        {/* Add more buttons as needed */}
      </div>
    );
  };
