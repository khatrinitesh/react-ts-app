import React, { useState } from 'react';
import { IconAnimationProps } from '../interface';
import { motion } from 'framer-motion';
import { ICON_ANIMATION_DURATION, ICON_VARIANTS } from '../constants/constants';

const AnimatedIcon:React.FC = () => {
    const [active,setActive] = useState(false);
  return (
    <>
    <div style={{ padding: 20 }}>
      <button onClick={() => setActive(!active)}>Toggle Icon</button>
      <AnimationCustom isActive={active} />
    </div>
    </>
  );
}

export default AnimatedIcon;

const AnimationCustom:React.FC<IconAnimationProps> = ({isActive}) => {
    return(
        <>
         <motion.div
      animate={isActive ? 'animated' : 'initial'}
      variants={ICON_VARIANTS}
      transition={{ duration: ICON_ANIMATION_DURATION }}
      style={{ display: 'inline-block', cursor: 'pointer' }}
    >
      {/* Replace this with any icon you want */}
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M6 9l6 6 6-6" stroke="#333" strokeWidth="2" fill="none" />
      </svg>
    </motion.div> 
        </>
    )
}
