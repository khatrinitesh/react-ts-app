import React, { useState, ChangeEvent, FormEvent } from 'react';

const CapitalizeAllWordsInput: React.FC = () => {
  const [value, setValue] = useState<string>('');

  // Capitalize the first letter of each word in the input value
  const capitalizeAllWords = (text: string): string => {
    return text
      .split(' ') // Split the input by spaces
      .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ) // Capitalize the first letter and make the rest lowercase
      .join(' '); // Join the words back with a space
  };

  // Handle input change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(capitalizeAllWords(newValue));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter text (all words capitalized):
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

export default CapitalizeAllWordsInput;
