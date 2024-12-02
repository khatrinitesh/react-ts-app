import React, { useEffect } from 'react';
import { useAlertStore } from '../store/store';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

const AlertType:React.FC = () => {
    const { message, type, showAlert, clearAlert } = useAlertStore((state) => state);

  // Automatically clear the alert after 3 seconds
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        clearAlert();
      }, 3000);
    }
  }, [showAlert, clearAlert]);

  if (!showAlert || !type) return null;

  let alertClass = '';
  let icon = null;


  switch (type) {
    case 'success':
      alertClass = 'bg-green-500';
      icon = <FaCheckCircle className="icon animate__animated animate__bounceIn" />;
      break;
    case 'warning':
      alertClass = 'bg-yellow-500';
      icon = <FaExclamationTriangle className="icon animate__animated animate__shakeX" />;

      break;
    case 'info':
      alertClass = 'bg-blue-500';
      icon = <FaInfoCircle className="icon animate__animated animate__fadeIn" />;
      break;
    default:
      alertClass = 'bg-gray-500';
  }


  return (
    <>
        <div
      className={`${alertClass} text-white p-4 rounded-md fixed top-5 left-1/2 transform -translate-x-1/2 w-1/2`}
      role="alert"
    >
      {icon}
      <span className="message">{message}</span>
    </div>
    </>
  );
}

export default AlertType;
