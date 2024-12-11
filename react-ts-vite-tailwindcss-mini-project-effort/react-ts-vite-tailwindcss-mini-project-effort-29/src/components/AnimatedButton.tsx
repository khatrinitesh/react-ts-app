import React from 'react';

const AnimatedButton:React.FC = () => {
  return (
    <>
      <motion.button 
      whileHover={{scale:1.1}}
      whileTap={{scale:0.9}}
      transition={{duration:0.2}} className="btn">
        Hover Me
      </motion.button>
    </>
  );
}

export default AnimatedButton;
