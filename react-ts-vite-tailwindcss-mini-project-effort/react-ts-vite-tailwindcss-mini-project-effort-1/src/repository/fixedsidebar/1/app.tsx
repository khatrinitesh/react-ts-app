import React, { useState,useEffect } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <FixedSidebar/>
    </>
  );
};

export default CustomApp;

const FixedSidebar: React.FC = () => {
   
  
    return (
        <div className="sidebar">
        {/* Sidebar content */}
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>
    );
  };