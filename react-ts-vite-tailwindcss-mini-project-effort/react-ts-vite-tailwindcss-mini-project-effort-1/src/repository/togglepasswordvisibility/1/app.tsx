import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <TogglePasswordVisibility/>
    </>
  )
}

export default CustomApp

const TogglePasswordVisibility: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(prevState => !prevState);
    };
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    };
  
    return (
      <div className="mt-4">
        <label className="block mb-2">Password</label>
        <div className="relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 rounded-md py-2 px-3 w-full pr-10 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {passwordVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21a2 2 0 01-2 2H9a2 2 0 01-2-2v-2a4 4 0 014-4h2" />
              </svg>
            )}
          </button>
        </div>
      </div>
    );
  };