import React from 'react';

const InputField: React.FC<InputProps> = ({
    name,
    id,
    type,
    disabled = false,
    maxlength,
    autocomplete,
    error,
    placeholder,
    value,
    onChange
  }) => {
    return (
      <div className="input-field">
        <input
          name={name}
          id={id}
          type={type} // or you can make this dynamic if needed
          disabled={disabled}
          maxLength={maxlength}
          autoComplete={autocomplete}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input ${error ? "input-error" : ""}`} // Conditional class for error styling
        />
        {error && <div className="error-message text-red-500 font-bold">{error}</div>} 
      </div>
    );
  };

export default InputField;
