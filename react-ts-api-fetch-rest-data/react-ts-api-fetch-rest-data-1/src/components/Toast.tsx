import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    // Automatically hide toast after 3 seconds
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={toastStyles}>
      {message}
    </div>
  );
};

// Inline styles for the toast notification
const toastStyles: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  borderRadius: '5px',
  zIndex: 1000,
};

export default Toast;
