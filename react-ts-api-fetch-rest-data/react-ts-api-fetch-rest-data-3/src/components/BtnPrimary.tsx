import React from 'react';
import { BtnPrimaryTypes } from '../types';

const BtnPrimary:React.FC<BtnPrimaryTypes> = ({onClick,label}) => {
  return (
    <>
      <button onClick={onClick} className='btn bg-purple-400 text-white rounded-[10px] flex items-center justify-center'>{label}</button>
    </>
  );
}

export default BtnPrimary;
