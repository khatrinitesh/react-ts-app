import React from 'react';
import { ButtonProps } from '../types';

const ButtonComp: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={() => onClick(label)}>{label}</button>
  );
};

export default ButtonComp;