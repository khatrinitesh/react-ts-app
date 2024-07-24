import React, { useState } from "react";
import { SELECT_OPTIONS } from '../../constants/constants';
import { SelectOptionProps } from '../../interface/interface';

const SelectOptionComp = () => {
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    }
  return (
    <>
      <label htmlFor="selectoptions">select an option:</label>
      <select 
        id="selectoptions"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Select...</option>
        {SELECT_OPTIONS.map((option: SelectOptionProps) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected option: {selectedOption}</p>
    </>
  );
};

export default SelectOptionComp;
