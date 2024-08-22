import React, { useState, ChangeEvent, FormEvent } from 'react';

const NoSpacesInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  // Function to handle input change and prevent spaces
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\s+/g, ''); // Remove all spaces
    setInputValue(value);
  };

  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        No Spaces Allowed:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter text"
        />
      </label>
      <button className='bg-blue-600 text-white px-5 py-2' type="submit">Submit</button>
    </form>
  );
};

export default NoSpacesInput;
