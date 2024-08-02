import React, { useState } from 'react'
import { ChildCompProps } from '../../interface/interface'

const PropsComponent = () => {
    const [value,setValue] = useState<string>();

    const handleValueChange =(newValue:string) => {
        setValue(newValue)
    }
    const handleBtnClick = () => {
        console.log('Button clicked!');
    }
  return (
    <>
    <ChildComponent value={value} onValueChange={handleValueChange} onBtnClick={handleBtnClick}/>
    </>
  )
}

export default PropsComponent

const ChildComponent:React.FC<ChildCompProps> = ({value,onValueChange,onBtnClick}) => {
    return(
        <> 
        <input type="text" value={value} onChange={(e) => onValueChange(e.target.value)} />
        <button onClick={onBtnClick}>Click me</button>
        </>
    )
}