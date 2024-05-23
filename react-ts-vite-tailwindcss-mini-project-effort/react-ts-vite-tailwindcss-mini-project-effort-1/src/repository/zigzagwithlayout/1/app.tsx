import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <h1>Zigzag Layout Example</h1>
        <ZigzagLayout />
    </>
  )
}

export default CustomApp

const ZigzagLayout: React.FC = () => {
    return (
      <div className="zigzag-container">
        <div className="zigzag-item">Item 1</div>
        <div className="zigzag-item">Item 2</div>
        <div className="zigzag-item">Item 3</div>
        {/* Add more items as needed */}
      </div>
    );
  };