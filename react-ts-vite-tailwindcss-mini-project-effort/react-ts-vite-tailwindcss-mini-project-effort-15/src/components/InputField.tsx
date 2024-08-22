import React from 'react';
import { InputFieldProps } from '../types';

const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    type,
    value,
    onChange,
    error,
    placeholder,
    maxLength
  }) => {
    return (
      <>
        <input
          id={id}
          maxLength={maxLength}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 block px-2 h-10 outline-none w-full border border-gray-300 rounded-md shadow-sm"
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </>
    );
  };

export default InputField;
