import React, { useState, ChangeEvent, FormEvent } from 'react';

const CapitalizeFirstLetterInput: React.FC = () => {
  const [value, setValue] = useState<string>('');

  // Capitalize the first letter of the input value
  const capitalizeFirstLetter = (text: string): string => {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  // Handle input change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(capitalizeFirstLetter(newValue));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter text (first letter capitalized):
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter text"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CapitalizeFirstLetterInput;
