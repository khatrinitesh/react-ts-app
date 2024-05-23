import React, { useState, useEffect } from "react";
import './style.css';

const CustomApp = () => {
  return(
    <>
        <ToggleTheme/>
    </>
  )
};

export default CustomApp;

interface Theme {
  mode: "light" | "dark";
}

const ToggleTheme: React.FC = () => {
  // Initialize theme state
  const [theme, setTheme] = useState<Theme>({ mode: 'light' });

  // Toggle function to switch between light and dark modes
  const toggleTheme = () => {
    setTheme(prevTheme => ({
      mode: prevTheme.mode === 'light' ? 'dark' : 'light'
    }));
  };

  // Update theme class on body element based on theme mode
  useEffect(() => {
    document.body.className = `theme-${theme.mode}`;
  }, [theme]);

  return (
    <>
      <div>
      {/* Toggle button to switch between light and dark modes */}
      <button onClick={toggleTheme}>
        {theme.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
      <p>Current Mode: {theme.mode}</p>
    </div>
    </>
  );
};
