import React from 'react';
import { AnimatedButtonProps } from '../interface/interface';
import { buttonStyles2,buttonAnimations } from './../constants/constants';

const AnimatedButtonsComp:React.FC<AnimatedButtonProps> = ({label, onClick }) => {
  return (
    <>
    <button
            className={`${buttonStyles2.base} ${buttonStyles2.primary} ${buttonAnimations.hover}`}
            onClick={onClick}
        >
            {label}
        </button>
    </>
  )
}

export default AnimatedButtonsComp