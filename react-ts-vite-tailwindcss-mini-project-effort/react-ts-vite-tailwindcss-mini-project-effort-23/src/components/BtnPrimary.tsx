import React from 'react';
import { BtnPrimartType } from '../types';

const BtnPrimary:React.FC<BtnPrimartType> = ({title,onClick}) => {
  return (
    <>
      <button className='bg-purple-600 px-5 py-2 rounded-[10px]' onClick={onclick}>{title}</button>
    </>
  );
}

export default BtnPrimary;
