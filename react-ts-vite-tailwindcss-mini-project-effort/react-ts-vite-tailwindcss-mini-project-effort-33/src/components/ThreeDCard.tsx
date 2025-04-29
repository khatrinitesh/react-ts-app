import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCardStore } from '../store/useCardStore';
import { CARD_HEIGHT, CARD_WIDTH } from '../constants/constants';

const ThreeDCard:React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { rotateX,rotateY,setRotate,reset}= useCardStore();
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;
        setRotate(rotateX, rotateY);
      };
    
      const handleMouseLeave = () => {
        reset();
      };
  return (
    <>
       <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: '#fff',
        borderRadius: 12,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        perspective: 1000,
        cursor: 'pointer',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 12,
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      >
        {/* Card content goes here */}
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
          }}
        >
          3D Card
        </div>
      </motion.div>
    </motion.div>
    </>
  );
}

export default ThreeDCard;
