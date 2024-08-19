import React from 'react';

// Define a type alias for a function
type ClickHandler = () => void;

interface ButtonProps{
    label:string;
    onClick:ClickHandler
}

const Example:React.FC<ButtonProps> = ({label,onClick}) => {
  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  )
}

export default Example
