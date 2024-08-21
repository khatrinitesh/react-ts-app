import React from 'react'

const BtnPrimary:React.FC<BtnPrimaryProps> = ({label,onClick}) => {
  return (
    <>
      <button onClick={onClick} className='bg-black text-white rounded-[10px] px-5 py-2'>{label}</button>
    </>
  )
}

export default BtnPrimary
