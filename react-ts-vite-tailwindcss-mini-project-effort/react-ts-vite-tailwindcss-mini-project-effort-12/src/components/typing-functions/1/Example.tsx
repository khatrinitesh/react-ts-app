import React from 'react';

// Define the type for the props
interface ButtonProps{
    onClick:(event:React.MouseEvent<HTMLButtonElement>) => void;
}

const Example:React.FC<ButtonProps> = ({onClick}) => {
  return (
    <>
      <button onClick={onClick}>Click me</button>
    </>
  )
}

export default Example
