import React, { useState,useEffect } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <FixedMenu/>
    </>
  );
};

export default CustomApp;

const FixedMenu: React.FC = () => {
    const handleScroll = () => {
      // Your scroll handling logic here, if needed
    };
  
    // Add scroll event listener when component mounts
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="fixed-menu">
        {/* Your menu items or content here */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  };