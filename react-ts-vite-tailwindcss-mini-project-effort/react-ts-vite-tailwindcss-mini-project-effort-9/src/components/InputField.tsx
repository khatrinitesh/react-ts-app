import React from 'react';
import InputField from './InputField';



const InputFieldComp:React.FC<InputField> = ({value,onChange,placeholder,type='text'}) => {
  return (
    <>
    <input value={value} type={type} placeholder={placeholder} onChange={onChange} className="input-field" />
    </>
  )
}

export default InputFieldComp