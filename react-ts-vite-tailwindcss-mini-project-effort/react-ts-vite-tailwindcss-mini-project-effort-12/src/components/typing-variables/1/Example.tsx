import React from 'react';

interface GreetingProps{
    name:string;
    age?:number; // optional prop
}

const Example:React.FC<GreetingProps> = ({name,age}) => {
  return (
    <>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </>
  )
}

export default Example
