import React from 'react';
import { BtnPrimaryProps } from '../interface';

const BtnPrimary:React.FC<BtnPrimaryProps> = ({title,onClick}) => {
  return (
    <>
      <button className='text-white font-bold px-4 py-2 rounded-[10px] bg-orange-500' onClick={onClick}>{title}</button>
    </>
  );
}

export default BtnPrimary;
