import React, { useState } from 'react'

const Example:React.FC = () => {

    const [inputVal,setInputVal] = useState('');
    const [errors,setErrors] = useState<string | null>(null);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(event.target.value)
    }

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        if(inputVal.trim() === ''){
            setErrors('input cannot be empty')
        }
        else{
            setErrors(null);
            console.log('form submitted with ',inputVal);
            
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="inputField">Input:</label>
                <input className="border p-2 transition-all duration-500 delay-500" type="text" value={inputVal} onChange={handleChange} placeholder='type...'/>
                {errors && <p style={{color:'red'}}>input cannot be empty</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default Example