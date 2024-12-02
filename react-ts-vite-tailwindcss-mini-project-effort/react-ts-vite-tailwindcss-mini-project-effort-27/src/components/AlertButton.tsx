import React  from 'react';
import { useAlertStore } from '../store/store';

const AlertBtnComp:React.FC = () => {
    const { setAlert } = useAlertStore();

    const handleSuccessAlert = () => {
      setAlert('This is a success message!', 'success');
    };
  
    const handleWarningAlert = () => {
      setAlert('This is a warning message!', 'warning');
    };
  
    const handleInfoAlert = () => {
      setAlert('This is an info message!', 'info');
    };
  return (
    <>
     <div className="flex space-x-4">
      <button onClick={handleSuccessAlert} className="bg-green-500 text-white p-2 rounded">
        Success
      </button>
      <button onClick={handleWarningAlert} className="bg-yellow-500 text-white p-2 rounded">
        Warning
      </button>
      <button onClick={handleInfoAlert} className="bg-blue-500 text-white p-2 rounded">
        Info
      </button>
    </div>
    </>
  );
}

export default AlertBtnComp;
