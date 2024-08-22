import React from 'react';
import { BtnPrimaryProps } from '../types';

const BtnPrimary:React.FC<BtnPrimaryProps> = ({title,onClick}) => {
  return (
    <>
      <button onClick={onClick} className='bg-green-700 text-white px-5 py-1 rounded-[5px]'>{title}</button>
    </>
  );
}

export default BtnPrimary;
