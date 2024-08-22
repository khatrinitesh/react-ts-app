import React, { useState, FormEvent } from 'react';

const NumberInput: React.FC = () => {
  const [value, setValue] = useState<number | ''>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Convert value to a number and update state
    const newValue = event.target.value;
    setValue(newValue === '' ? '' : Number(newValue));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a number:
        <input
         className='appearance-none'
          type="number"
          value={value}
          onChange={handleChange}
          placeholder="Enter number"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NumberInput;
