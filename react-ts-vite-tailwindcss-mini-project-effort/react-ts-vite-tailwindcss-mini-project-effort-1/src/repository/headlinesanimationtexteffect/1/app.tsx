import React, { useState,useEffect  } from 'react';
import './style.css';

const CustomApp:React.FC = () => {
  return (
    <>
     <Headlines/>
    </>
  )
}

export default CustomApp


const Headlines: React.FC = () => {
    return (
      <div className="headlines-container">
        <h1 className="headline">Welcome to React TypeScript!</h1>
        <h1 className="headline">Build Amazing Apps with React</h1>
        <h1 className="headline">Experience the Power of TypeScript</h1>
      </div>
    );
  };
  