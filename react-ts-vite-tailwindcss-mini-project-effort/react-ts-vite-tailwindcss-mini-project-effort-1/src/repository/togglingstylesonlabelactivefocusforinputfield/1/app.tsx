import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <FormInput/>
    </>
  )
}

export default CustomApp

const FormInput: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleInputFocus = () => {
      setInputFocused(true);
    };
  
    const handleInputBlur = () => {
      if (!inputValue) setInputFocused(false);
    };
  
    const [inputFocused, setInputFocused] = useState<boolean>(false);
  
    return (
      <div className="form-group">
        <input
          id="yourname"
          name="yourname"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className={inputFocused || inputValue ? 'has-value' : ''}
        />
        <label htmlFor="yourname">Name</label>
      </div>
    );
  };
  