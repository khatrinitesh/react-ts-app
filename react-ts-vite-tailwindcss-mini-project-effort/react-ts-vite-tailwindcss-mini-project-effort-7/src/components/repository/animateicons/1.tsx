import React from 'react'
import { ButtonProps } from '../../../interface/interface'

const AnimateBtns:React.FC<ButtonProps> = ({type,animation,onClick,children}) => {

    const buttonClass = `button ${type} ${animation ? `animate-${animation}` : ''}`;
  return (
    <>
    <button className={buttonClass} onClick={onClick}>{children}</button>
    </>
  )
}

export default AnimateBtns