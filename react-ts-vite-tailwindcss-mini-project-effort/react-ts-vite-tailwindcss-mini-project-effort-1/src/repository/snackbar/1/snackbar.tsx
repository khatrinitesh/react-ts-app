import React, { useState } from 'react';

interface SnackbarProps {
    message: string;
  }

  const Snackbar: React.FC<SnackbarProps> = ({ message }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpen = () => {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Adjust the timeout duration as needed
    };
  
    return (
      <div>
        <button onClick={handleOpen}>Show Snackbar</button>
        {isOpen && <div className="snackbar">{message}</div>}
      </div>
    );
  };

  export default Snackbar;

  5029301
  46683
  42