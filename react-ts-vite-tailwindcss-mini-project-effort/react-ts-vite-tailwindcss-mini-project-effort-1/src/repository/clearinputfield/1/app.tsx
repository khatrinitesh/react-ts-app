import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <div>
      <ClearInputField/>
    </div>
  )
}

export default CustomApp

const ClearInputField:React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };

      const handleClear = () => {
        setInputValue('');
      };
    return(
        <>
        <div className="flex items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex-grow"
      />
      {inputValue && (
        <button
          onClick={handleClear}
          className="ml-2 p-2 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 112 0v2a1 1 0 11-2 0V9zm6.293 2.293a1 1 0 00-1.414-1.414L10 10.586l-1.879-1.88a1 1 0 00-1.414 1.414L8.586 12l-1.88 1.879a1 1 0 001.414 1.414L10 13.414l1.879 1.88a1 1 0 001.414-1.414L11.414 12l1.88-1.879z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
        </>
    )
}