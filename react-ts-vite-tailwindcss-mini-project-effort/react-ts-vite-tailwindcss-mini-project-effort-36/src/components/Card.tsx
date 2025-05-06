import React from 'react';
import type { CardProps } from '../interface';
import { useHoverStore } from '../store/useHoverStore';
import { motion } from 'framer-motion';

const Card:React.FC<CardProps> = ({data}) => {
    const { hoveredCardId, setHoveredCardId } = useHoverStore();

    const isHovered = hoveredCardId === data.id;
  return (
    <>
      <motion.div
      className="card"
      onMouseEnter={() => setHoveredCardId(data.id)}
      onMouseLeave={() => setHoveredCardId(null)}
      animate={{
        scale: isHovered ? 1.05 : 1,
        boxShadow: isHovered
          ? '0px 10px 20px rgba(0,0,0,0.2)'
          : '0px 4px 10px rgba(0,0,0,0.1)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#fff',
        margin: '1rem',
        width: '200px',
        cursor: 'pointer',
      }}
    >
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </motion.div>
    </>
  );
}

export default Card;
