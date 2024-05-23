import React, { useState } from 'react'

const CustomApp = () => {
    const option = {
        label:'asddadda'
    }
  return (
    <>
      <CheckboxApp label={option.label}/>
    </>
  )
}

export default CustomApp

interface CheckboxProps {
    label:string;
}

const CheckboxApp:React.FC<CheckboxProps> = ({label}) => {

    const [isChecked,setIschecked] = useState<boolean>(false);

    const handleCheck = () => {
        setIschecked(!isChecked)
    }

    return(
        <>
        <label>
            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
            
        </label>
        {isChecked && <>{label}</>}
        </>
    )
}
