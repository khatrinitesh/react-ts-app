import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { usePinStore } from '../store/usePinStore';
import { PIN_SIZE, ROTATE_FACTOR } from '../constants/constants';

const ThreeDPin:React.FC = () => {
    const pinRef = useRef<HTMLDivElement>(null);
    const {rotateX,rotateY,setRotation,resetRotation} = usePinStore();

    const handleMouseMove = (e:React.MouseEvent) => {
        const rect = pinRef.current?.getBoundingClientRect();
        if (!rect) return;
    
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
    
        const rotX = -((y - centerY) / centerY) * ROTATE_FACTOR;
        const rotY = ((x - centerX) / centerX) * ROTATE_FACTOR;
    
        setRotation(rotX, rotY);
    }
  return (
    <>
       <motion.div
      ref={pinRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      style={{
        width: PIN_SIZE,
        height: PIN_SIZE,
        perspective: 800,
        cursor: 'pointer',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50% 50% 50% 0',
          backgroundColor: '#ff3b3f',
          transformOrigin: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }}
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      />
    </motion.div>
    </>
  );
}

export default ThreeDPin;
