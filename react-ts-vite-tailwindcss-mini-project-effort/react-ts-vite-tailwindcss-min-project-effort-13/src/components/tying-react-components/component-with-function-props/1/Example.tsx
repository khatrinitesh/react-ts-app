import React from 'react'
import {  ClickableButtonProps } from '../../../../interface'

const Example:React.FC<ClickableButtonProps> = ({onClick,label}) => {
  return (
    <div className='container'>
       <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default Example