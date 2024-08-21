import React from 'react'
import { BtnPrimaryProps } from '../interface'

const BtnPrimary:React.FC<BtnPrimaryProps> = ({label,onClick}) => {
  return (
    <>
    <button className='text-base rounded-[10px] bg-purple-400 text-white px-5 py-2' onClick={onClick}>{label}</button>
    </>
  )
}

export default BtnPrimary