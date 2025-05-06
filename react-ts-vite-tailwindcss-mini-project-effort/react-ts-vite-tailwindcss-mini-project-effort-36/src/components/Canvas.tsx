import React from 'react';
import { useCanvasStore } from '../store/useCanvasStore';
import { motion } from 'framer-motion';

const CanvasComp:React.FC = () => {
    const {isRevealed,toggleReveal,} = useCanvasStore();
  return (
    <>
      <motion.canvas
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealed ? 1 : 0 }}
        transition={{ duration: 1 }}
        width={500}
        height={500}
        style={{ border: '1px solid black' }}
      />
      <button onClick={toggleReveal}>
        {isRevealed ? 'Hide Canvas' : 'Reveal Canvas'}
      </button>
    </>
  );
}

export default CanvasComp;
