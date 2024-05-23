import React, { useState,useEffect } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <FixedHeader/>
    </>
  );
};

export default CustomApp;

const FixedHeader: React.FC = () => {
    return (
      <div className="fixed-header-container">
        <header className="fixed-header">
          <h1>Fixed Header</h1>
        </header>
        <div className="content">
          {/* Your content here */}
        </div>
      </div>
    );
  };