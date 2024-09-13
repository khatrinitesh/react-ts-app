import React from 'react';
import { BtnPrimaryTypes } from '../types';

const BtnPrimary:React.FC<BtnPrimaryTypes> = ({title,onClick}) => {
  return (
    <>
      <button onClick={onClick} className='bg-black text-white rounded-[20px] px-6 py-2'>{title}</button>
    </>
  );
}

export default BtnPrimary;
