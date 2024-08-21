import React from 'react';
import { InputFieldProps, InputProps } from '../types';

const InputField: React.FC<InputProps> = ({
    type = 'text',
    id,
    name,
    value,
    onChange,
    placeholder,
    className = '',
  }) => {
    return (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-12 w-full rounded-full border px-4 py-2 ${className}`} // Add default and custom classes
      />
    );
  };

export default InputField;
