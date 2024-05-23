import React, { useState } from "react";

const CustomApp = () => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const showToast = (message: string, type: 'success' | 'error' | 'info') => {
      setToasts((prevToasts) => [...prevToasts, { message, type }]);
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, 5000);
    };
  return (
    <>
     {/* Render Toasts */}
     {toasts.map((toast, index) => (
        <Toast key={index} message={toast.message} type={toast.type} />
      ))}

      {/* Example Usage */}
      <button onClick={() => showToast('Success message', 'success')}>Show Success Toast</button>
      <br />
      <button onClick={() => showToast('Error message', 'error')}>Show Error Toast</button>
      <br />
      <button onClick={() => showToast('Info message', 'info')}>Show Info Toast</button>
    </>
  )
};

export default CustomApp;

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const toastClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed bottom-0 right-0 mb-4 mr-4 p-4 text-white rounded ${toastClasses[type]}`}
    >
      {message}
    </div>
  );
};

