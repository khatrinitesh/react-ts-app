import React, { useState } from 'react';
import Toast from './Toast';

const FormComponent : React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setToastMessage('Both fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      setToastMessage('Invalid email address.');
      return;
    }

    if (password.length < 6) {
      setToastMessage('Password must be at least 6 characters long.');
      return;
    }

    // If validation passes
    setToastMessage('Form submitted successfully!');
    // Clear fields (optional)
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password} maxLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </>
  );
};

export default FormComponent ;
