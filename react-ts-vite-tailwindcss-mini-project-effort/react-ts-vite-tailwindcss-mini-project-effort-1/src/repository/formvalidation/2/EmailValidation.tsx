import React, { useState, FormEvent } from 'react';

const EmailInput: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid) {
      console.log('Submitted email:', email);
    } else {
      console.log('Invalid email format');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email" // HTML5 email validation
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </label>
      {!isValid && <p style={{ color: 'red' }}>Invalid email format</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailInput;
