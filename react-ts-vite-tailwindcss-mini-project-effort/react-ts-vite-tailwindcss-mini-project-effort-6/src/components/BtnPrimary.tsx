import React from 'react'
import { BtnPrimaryProps } from '../interface/interface'

const BtnPrimary:React.FC<BtnPrimaryProps> = ({label,onClick}) => {
  return (
    <>
     <button onClick={onClick}>{label}</button>
    </>
  )
}

export default BtnPrimary