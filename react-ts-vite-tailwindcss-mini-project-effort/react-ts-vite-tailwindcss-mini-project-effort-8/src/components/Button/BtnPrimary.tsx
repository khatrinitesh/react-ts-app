import React from 'react'
import { BtnPrimaryProps } from '../../interface/interface'

const BtnPrimary:React.FC<BtnPrimaryProps> = ({children,onClick}) => {
  return (
    <>
    <button onClick={onClick} className='bg-black text-white px-2 py-2 rounded'>{children}</button>
    </>
  )
}

export default BtnPrimary