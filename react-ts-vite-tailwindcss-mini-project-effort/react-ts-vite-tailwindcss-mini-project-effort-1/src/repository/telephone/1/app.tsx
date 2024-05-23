import React from 'react';
import InputMask from "react-input-mask";

const CustomApp = () => {
  return (
    <>
        <Telephone/>
    </>
  )
}

export default CustomApp

const Telephone: React.FC = () => {
    return (
      <div className="flex items-center">
        <label className="block text-gray-700 text-sm font-bold mr-2" htmlFor="telephone">
          Telephone:
        </label>
        <div className="relative">
          <InputMask
            id="telephone"
            mask="(999) 999-9999"
            className="block w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="(123) 456-7890"
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.293 5.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 8.586l1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };