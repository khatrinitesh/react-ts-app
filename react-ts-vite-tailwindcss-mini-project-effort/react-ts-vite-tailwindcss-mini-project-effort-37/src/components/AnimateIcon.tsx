import React from 'react';
import { useAnimateIconStore } from '../store/useAnimateIconStore';
import { motion } from 'framer-motion';
import { iconPaths } from '../constants/animateiconData';

const AnimateIcon = () => {
    const { isActive, toggle } = useAnimateIconStore();
  return (
    <>
      <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={toggle}
      className="cursor-pointer"
    >
      <motion.path
        d={iconPaths.horizontal}
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={{ rotate: isActive ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </svg>
    </>
  );
}

export default AnimateIcon;
