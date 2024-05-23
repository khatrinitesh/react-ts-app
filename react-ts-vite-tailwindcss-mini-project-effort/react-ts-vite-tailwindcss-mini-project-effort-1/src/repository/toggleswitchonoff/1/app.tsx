import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <ToggleBackground/>
    </>
  )
}

export default CustomApp

const ToggleBackground: React.FC = () => {
    const [isOn, setIsOn] = useState<boolean>(false);
  
    const toggleBackground = () => {
      setIsOn(prevState => !prevState);
    };
  
    return (
      <div className={isOn ? 'toggle on' : 'toggle'} onClick={toggleBackground}>
        <input type="checkbox" id="toggleInput" checked={isOn} readOnly />
        <label htmlFor="toggleInput"></label>
      </div>
    );
  };
  

