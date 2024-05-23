import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <h1>Show/Hide Div on Checkbox Change</h1>
        <CheckboxApp label="Check to Show Div" />

    </>
  )
}

export default CustomApp

interface CheckProps{
    label:string;
}

const CheckboxApp:React.FC<CheckProps> = ({label}) => {

    const [isChecked,setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked)
    }
    return(
        <>
            <label>
                <input type="checkbox" value={isChecked} onChange={handleChange} checked={isChecked} />
                {label}
            </label>
            {isChecked && <div>This div is visible when the checkbox is checked</div>}
        </>
    )
}