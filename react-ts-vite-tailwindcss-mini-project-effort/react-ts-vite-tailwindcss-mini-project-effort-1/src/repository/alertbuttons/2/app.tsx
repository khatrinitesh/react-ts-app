import React,{useState } from 'react';
import './style.css';

const CustomApp: React.FC = () => {
  
    return (
      <>
        <AlertSuccess message="This is a success message"/>
        <AlertWarning message="This is a warning message"/>
        <AlertError message="This is an error message"/>
      </>
    );
  };

export default CustomApp


enum AlertType {
    Success= 'success',
    Error = 'error',
    Warning = 'warning'
}

type AlertButtonProps = {
    type:AlertType;
    message:string;
}




const AlertSuccess: React.FC<{ message: string }> = ({ message }) => {
    const handleClick = () => {
        alert(`Success: ${message}`);
    };

    return <button className="success-button" onClick={handleClick}>{AlertType.Success} Alert</button>;
};

const AlertWarning: React.FC<{ message: string }> = ({ message }) => {
    const handleClick = () => {
        alert(`Warning: ${message}`);
    };

    return <button className="warning-button" onClick={handleClick}>{AlertType.Warning} Alert</button>;
};

const AlertError: React.FC<{ message: string }> = ({ message }) => {
    const handleClick = () => {
        alert(`Error: ${message}`);
    };

    return <button className="error-button" onClick={handleClick}>{AlertType.Error} Alert</button>;
};



