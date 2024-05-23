import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <CenterWebsites/>
    </>
  )
}

export default CustomApp

const CenterWebsites: React.FC = () => {
    return (
      <div className="container">
        <div className="content">
          <h1>Welcome to My Centered Website</h1>
          <p>This is a simple example of centering content using React with TypeScript.</p>
        </div>
      </div>
    );
  }
