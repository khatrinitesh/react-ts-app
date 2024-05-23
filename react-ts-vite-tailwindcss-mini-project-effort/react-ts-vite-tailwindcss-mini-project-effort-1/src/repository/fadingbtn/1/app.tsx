import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
      <FadingButton/>
    </>
  )
}

export default CustomApp

const FadingButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    const handleClick = () => {
      setIsVisible(!isVisible);
    };
  
    return (
        <>
        <button className="fading-button" onClick={handleClick}>
            Click me to {isVisible ? 'close' : 'open'}
          </button>
        <div className="fading-button-container">
        {isVisible && (
          <span className='font-bold text-red-500'>hi happy coding</span>
        )}
      </div>
         
        </>
      
    );
  };
  