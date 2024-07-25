import React from 'react'
import { BtnPrimaryProps } from '../interface/interface'

const BtnPrimary:React.FC<BtnPrimaryProps> = ({label,onClick}) => {
  return (
    <>
        <button className='bg-slate-400 px-5 py-2 rounded text-white' onClick={onClick}>{label}</button>
    </>
  )
}

export default BtnPrimary