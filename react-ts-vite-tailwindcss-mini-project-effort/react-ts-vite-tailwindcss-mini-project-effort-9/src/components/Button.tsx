import React from 'react'
import { ButtonProps } from '../interface'

const ButtonComp:React.FC<ButtonProps> = ({onClick,children,className}) => {
  return (
    <>
        <button className={className} onClick={onClick}>{children}</button>
    </>
  )
}

export default ButtonComp