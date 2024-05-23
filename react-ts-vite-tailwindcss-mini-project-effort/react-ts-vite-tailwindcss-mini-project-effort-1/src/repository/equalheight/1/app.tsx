import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <div className='equal-height-container'>
        <Component1/>
        <Component2/>
        <Component3/>
    </div>
  )
}

export default CustomApp

const Component1: React.FC = () => {
    return (
      <div className="equal-height">Component 1</div>
    );
  };

  const Component2: React.FC = () => {
    return (
      <div className="equal-height">Component 2</div>
    );
  };

  const Component3: React.FC = () => {
    return (
      <div className="equal-height">Component 3</div>
    );
  };