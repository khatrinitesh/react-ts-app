import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <div>
        <Divider/>
    </div>
  )
}

export default CustomApp

const Divider: React.FC = () => {
    return <hr className="divider" />;
  };