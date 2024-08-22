import React, { useState, ChangeEvent, FormEvent } from 'react';

const INRInput: React.FC = () => {
  const [value, setValue] = useState<string>('');

  // Function to format the number in INR style
  const formatINR = (number: string): string => {
    // Remove non-digit characters except for commas
    const cleanedNumber = number.replace(/[^\d]/g, '');
    // Convert the cleaned number to a format with commas
    const formattedNumber = cleanedNumber.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    return formattedNumber;
  };

  // Handle input change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    // Format the value and set it in the state
    setValue(formatINR(newValue));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Remove commas before submitting or further processing
    const rawValue = value.replace(/,/g, '');
    console.log('Submitted value (raw number):', rawValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter amount (INR):
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter amount"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default INRInput;
