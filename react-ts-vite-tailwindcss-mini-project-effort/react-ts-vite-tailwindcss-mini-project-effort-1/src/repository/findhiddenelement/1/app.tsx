import React, { useState,useEffect } from 'react';

const CustomApp = () => {
  return (
    <>
      <HiddenElementExample/>
    </>
  );
};

export default CustomApp;

const HiddenElementExample: React.FC = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
  
    const toggleVisibility = () => {
      setIsHidden(!isHidden);
    };
  
    return (
      <div>
        <button onClick={toggleVisibility}>Toggle Visibility</button>
        {isHidden && <div >This is a hidden element</div>}
      </div>
    );
  };