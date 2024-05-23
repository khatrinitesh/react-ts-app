import React, { useRef, useEffect, useState } from "react";
// import "./style.css";

const CustomApp = () => {
  return (
    <>
      <div className="relative h-screen">
      <PasswordValidator />
      {/* Your other content goes here */}
    </div>
    </>
  );
};

export default CustomApp;

const PasswordValidator: React.FC = () => {
    const [password, setPassword] = useState('');
    const [validLength, setValidLength] = useState(false);
    const [hasUppercase, setHasUppercase] = useState(false);
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
  
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      validatePassword(newPassword);
    };
  
    const validatePassword = (password: string) => {
      // Validate password length (minimum 8 characters)
      setValidLength(password.length >= 8);
  
      // Validate if password contains uppercase letter
      setHasUppercase(/[A-Z]/.test(password));
  
      // Validate if password contains lowercase letter
      setHasLowercase(/[a-z]/.test(password));
  
      // Validate if password contains number
      setHasNumber(/\d/.test(password));
    };
  
    return (
      <div>
        <h2>Password Validator</h2>
        <div>
          <label htmlFor="password">Enter password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <ul>
          <li>Password must be at least 8 characters long: {validLength ? '✅' : '❌'}</li>
          <li>Password must contain at least one uppercase letter: {hasUppercase ? '✅' : '❌'}</li>
          <li>Password must contain at least one lowercase letter: {hasLowercase ? '✅' : '❌'}</li>
          <li>Password must contain at least one number: {hasNumber ? '✅' : '❌'}</li>
        </ul>
      </div>
    );
  };