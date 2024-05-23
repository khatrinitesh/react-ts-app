import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <div>
        <VerticalLine/>
    </div>
  )
}

export default CustomApp

const VerticalLine: React.FC = () => {
    return <div className="vertical-line"></div>;
  };