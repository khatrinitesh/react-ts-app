import React from 'react';
import { BtnPrimaryProps } from '../types';

const BtnPrimary:React.FC<BtnPrimaryProps> = ({onClick,label}) => {
  return (
    <>
      <button onClick={onclick}>{label}</button>
    </>
  );
}

export default BtnPrimary;
