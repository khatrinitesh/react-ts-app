import React, { useState } from 'react';

const Example:React.FC = () => {

    const [inputValue, setInputValue] = useState(''); // Manage input value state

     // Handler function for input changes
    const handleInputChange:InputChangeHandler = (event) => {
        setInputValue(event.target.value)
    }

  return (
    <>
        <ListComp onChange={handleInputChange}/>
        {inputValue}
    </>
  )
}

export default Example

type InputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => void;

interface FormProps{
    onChange:InputChangeHandler;
}

const ListComp:React.FC<FormProps> = ({onChange}) => {
    return(
        <>
         <input className="border p-2 outline bg-slate-300 focus:bg-transparent" placeholder="write down..." type="text" onChange={onChange} /> 
         {/* // Attach the onChange handler */}
        </>
    )
}