import React, { useState } from "react";

const CustomApp = () => {
    const handleLogin = (username: string, password: string) => {
        // Your login logic goes here
        console.log('Username:', username);
        console.log('Password:', password);
      };
  return (
    <>
    <LoginForm onLogin={handleLogin}/>
    </>
  )
};

export default CustomApp;

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
    // Optionally, you can clear the input fields after submission
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
