import React, { useState } from "react";

const CustomApp = () => {
 
  return (
    <>
      <Navbar />
    </>
  );
};

export default CustomApp;

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">My App</div>
        <div>
          {/* Login Form */}
          <LoginForm />
        </div>
      </div>
    </nav>
  );
};

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Your login logic here
      console.log('Username:', username);
      console.log('Password:', password);
      // Clear form fields
      setUsername('');
      setPassword('');
    };
  
    return (
      <form onSubmit={handleLogin} className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-2 py-1 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-2 py-1 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    );
  };
