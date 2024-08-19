import React from 'react'
import { ButtonPrimaryProps } from '../interface/interface'

const BtnPrimary:React.FC<ButtonPrimaryProps> = ({onClick,title}) => {
  return (
    <>
    <button onClick={onClick} className='bg-red-600 text-white rounded-[5px] px-4 py-2'>{title}</button> 
    </>
  )
}

export default BtnPrimary
