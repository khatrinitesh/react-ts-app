import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <TriggerComp/>
    </>
  )
}

export default CustomApp

const TriggerComp: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleButtonClick = () => {
      // Do something with the input value
      console.log('Button clicked with value:', inputValue);
    };
  
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        // Trigger button click when Enter is pressed
        handleButtonClick();
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type here..."
        />
        <button onClick={handleButtonClick}>Submit</button>
      </div>
    );
  };
  