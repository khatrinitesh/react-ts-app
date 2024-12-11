import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaArrowRight, FaArrowDown, FaArrowLeft } from 'react-icons/fa';
import { useArrowStore } from '../store/store';

const Arrows:React.FC = () => {

    const {direction,toggleDirection} = useArrowStore();

      // Determine which arrow to display based on the current direction state
  const renderArrow = () => {
    switch (direction) {
      case 'top':
        return <FaArrowUp size={50} />;
      case 'right':
        return <FaArrowRight size={50} />;
      case 'bottom':
        return <FaArrowDown size={50} />;
      case 'left':
        return <FaArrowLeft size={50} />;
      default:
        return <FaArrowUp size={50} />;
    }
  };
  return (
    <>
       <motion.div
      animate={{ rotate: direction === 'left' ? 0 : direction === 'right' ? 90 : direction === 'bottom' ? 180 : 270 }}
      transition={{ duration: 0.5 }}
      onClick={toggleDirection}
      style={{ cursor: 'pointer' }}
    >
      {renderArrow()}
    </motion.div>
    </>
  );
}

export default Arrows;
