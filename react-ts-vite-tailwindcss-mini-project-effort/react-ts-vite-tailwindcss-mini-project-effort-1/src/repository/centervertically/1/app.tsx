import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <CernterVertically/>
    </>
  )
}

export default CustomApp

const CernterVertically: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Centered Content</h1>
        <p>This content is vertically centered using React with TypeScript.</p>
      </div>
    </div>
  );
}