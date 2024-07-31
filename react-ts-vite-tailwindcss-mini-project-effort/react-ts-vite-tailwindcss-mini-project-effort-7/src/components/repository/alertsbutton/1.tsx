import React from 'react'
import {  AlertProps } from '../../../interface/interface'
import { ALERT_MESSAGES, BUTTON_CONFIG } from './../../../constants/constants';

const AlertsBtnComp:React.FC<AlertProps> = ({message, onClose }) => {
    const handleButtonClick = () => {
        alert("Button clicked!");
    };
  return (
    <>
        <div className="alert">
            <span>{ALERT_MESSAGES[message]}</span>
            <button onClick={onClose}>Close</button>
        </div>
        <Button type="SECONDARY" onClick={handleButtonClick}/>
    </>
  )
}

export default AlertsBtnComp

const Button: React.FC<ButtonProps> = ({ type, onClick }) => {
    const config = BUTTON_CONFIG[type];
    
    return (
        <button style={{ backgroundColor: config.color }} onClick={onClick}>
            {config.text}
        </button>
    );
};