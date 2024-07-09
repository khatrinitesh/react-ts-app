import React, { useState } from 'react';
import { animationConstants } from '../constants/constants';
import { AnimatedBox } from '../assets/style/style';

const AnimationComp:React.FC = () => {

    const [isVisible, setIsVisible] = useState<boolean>(true);

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    };
   
  return (
    <>
     <button onClick={toggleVisibility}>Toggle Animation</button>
            {isVisible && (
                <AnimatedBox animationName="fadeIn">
                    <h2>Hello, world!</h2>
                </AnimatedBox>
            )}
    </>
  )
}

export default AnimationComp