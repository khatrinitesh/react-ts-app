import React from 'react';
import { locationOptions } from '../constants/location';

const SelectField:React.FC<SelectProps> = ({ value, onChange, options, placeholder }) => {
    return (
      <div className='customSelect'>
        <select
          value={value}
          onChange={onChange}
          className="block h-12  w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" disabled>
            {placeholder || 'Select an option'}
          </option>
          {locationOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
 };

export default SelectField;
