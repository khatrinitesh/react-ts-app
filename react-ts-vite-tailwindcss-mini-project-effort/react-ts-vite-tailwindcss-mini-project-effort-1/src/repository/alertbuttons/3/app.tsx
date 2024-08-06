
import React, { useState } from 'react';
import { AlertBtnprops } from './types';

const CustomApp = () => {
    const handleClick = (message:string) =>{
        console.log(message);
    }
  return (
    <div>
      <AlertButton onClick={() => handleClick('Success Button Clicked')} type={'success'} message={''}/>

      <AlertButton onClick={() => handleClick('Error Button Clicked')} type={'error'} message={''}/>

      <AlertButton onClick={() => handleClick('Info Button Clicked')} type={'info'} message={''}/>
    </div>
  )
}

export default CustomApp


const getButtonStyles = (type:AlertBtnprops['type']) => {
    switch(type){
        case 'success':
        return 'bg-green-500 text-white hover:bg-green-600';
        case 'error':
        return 'bg-red-500 text-white hover:bg-red-600';
        case 'info':
        return 'bg-blue-500 text-white hover:bg-blue-600';
        default:
        return '';
    }
}

const AlertButton:React.FC<AlertBtnprops> = ({ type, message, onClick}) => {
    const buttonStyles  = getButtonStyles(type);
    return(
        <>
            <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md font-semibold focus:outline-none ${buttonStyles}`}
            >
            {message}
            </button>
        </>
    )
}