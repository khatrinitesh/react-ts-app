import React from 'react';
import { useAnimateIconStore } from '../store/store';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const AnimateIcons:React.FC = () => {
    const {isAnimating,toggleAnimation} = useAnimateIconStore()
  return (
    <>
       <motion.div
      animate={{ rotate: isAnimating ? 180 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={toggleAnimation}
      style={{ cursor: 'pointer' }}
    >
      <FaCoffee size={50} />
    </motion.div>
    </>
  );
}

export default AnimateIcons;
