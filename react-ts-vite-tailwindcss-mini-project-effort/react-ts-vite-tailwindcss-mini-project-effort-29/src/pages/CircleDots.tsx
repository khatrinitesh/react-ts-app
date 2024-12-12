import React from 'react';
import { useCircleDotsStore } from '../store/store';
import { motion } from 'framer-motion';

const CircleDots = () => {

    const {isAnimating,toggleAnimation } = useCircleDotsStore();
    const circleVariants = {
        animate: {
          y: [0, 30, 0],
          opacity: [1, 0.5, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: 'easeInOut',
          },
        },
      };
    
  return (
    <>
      <div className="dots-container">
      <div className="control-buttons">
        <button onClick={toggleAnimation}>
          {isAnimating ? 'Pause Animation' : 'Start Animation'}
        </button>
      </div>

      <div className="dots-wrapper">
        {/* Dot 1 */}
        <motion.div
          className="dot"
          variants={circleVariants}
          animate={isAnimating ? 'animate' : undefined}
        />
        {/* Dot 2 */}
        <motion.div
          className="dot"
          variants={circleVariants}
          animate={isAnimating ? 'animate' : undefined}
          transition={{ delay: 0.3 }}
        />
        {/* Dot 3 */}
        <motion.div
          className="dot"
          variants={circleVariants}
          animate={isAnimating ? 'animate' : undefined}
          transition={{ delay: 0.6 }}
        />
      </div>
    </div>
    </>
  );
}

export default CircleDots;
