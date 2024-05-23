import React, { useState } from 'react';
import  './style.css';

const CustomApp = () => {
  return (
    <>
        <AnimatedButtons/>
    </>
  )
}

export default CustomApp

const AnimatedButtons:React.FC = () => {
    const [isHovered,setIshovered] = useState<boolean>(false);

    const handleME = () => {
        setIshovered(true)
    }
    const handleML = () => {
        setIshovered(false)
    }


    return(
        <>
        <button className={`animated-button ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleME} onMouseLeave={handleML}>Click me</button>
        </>
    )
}