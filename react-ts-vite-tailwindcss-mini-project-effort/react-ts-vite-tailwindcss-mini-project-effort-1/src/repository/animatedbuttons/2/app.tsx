
import React, { useState } from 'react';
import { AnimatedButtonProps } from './interface';

const CustomApp = () => {

    const handleClick = (message: string) => {
        console.log(message)
    }
  return (
    <>
    <AnimatedButton label="pulse" animation="pulse" onClick={ () => handleClick('pulse')}/>
    <AnimatedButton label="bounce" animation="bounce" onClick={ () => handleClick('bounce')}/>
    <AnimatedButton label="shake" animation="shake" onClick={ () => handleClick('shake')}/>
    </>
  )
}

export default CustomApp

const getAnimationClass = (animation:AnimatedButtonProps['animation']) => {
    switch(animation){
        case 'pulse':
            return 'animate-pulse';
          case 'bounce':
            return 'animate-bounce';
          case 'shake':
            return 'animate-shake'; // Custom animation (defined below)
          default:
            return '';
    }
}

const AnimatedButton:React.FC<AnimatedButtonProps> = ({label,onClick,animation}) => {
    const animationClass = getAnimationClass(animation);

    return(
        <>
         <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none ${animationClass}`}
    >
      {label}
    </button>
        </>
    )
}