import React, { useRef } from 'react';
import { useSearchStore } from '../store/useSearchStore';
import { PLACEHOLDER_TEXT } from '../constants/constants';
import { motion } from 'framer-motion';
import '../styling/animateSearch.css'

const AnimateSearch:React.FC = () => {
    const { isActive, toggleSearch, resetSearch } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    toggleSearch();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  return (
    <>
       <div className={`search ${isActive ? 'x' : ''}`}>
      <svg
        id="r"
        viewBox="0 0 3000.29 592.05"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleIconClick}
        style={{ width: 330, margin: '0 auto', cursor: 'pointer' }}
      >
        <path
          d="M2409,211.5c0,116.25,94.24,210.5,210.5,210.5a209.45,209.45,0,0,0,115.68-34.66c.55.62,1,1.31,1.55,1.9L2848,500.47A42.79,42.79,0,1,0,2908.47,440L2797.24,328.73c-.59-.59-1.28-1-1.9-1.55A209.46,209.46,0,0,0,2830,211.5C2830,95.24,2735.75,1,2619.5,1S2409,95.24,2409,211.5 M2482,211.5A137.53,137.53,0,1,1,2619.5,349,137.53,137.53,0,0,1,2482,211.5"
          id="a"
          transform="translate(-19 7)"
          className={isActive ? 'active' : ''}
          style={{
            fill: 'rgba(255,255,255,0)',
            stroke: '#fff',
            strokeWidth: isActive ? 40 : 20,
            cursor: 'pointer',
            strokeMiterlimit: 10,
            transition: 'stroke-width 0.3s',
          }}
        />
        <rect
          id="b"
          x="30"
          y="30"
          width="2860.29"
          height="462.05"
          style={{
            fill: 'none',
            stroke: '#fff',
            strokeWidth: 40,
            strokeMiterlimit: 10,
            visibility: 'hidden',
          }}
        />
      </svg>

      <motion.input
        id="input"
        ref={inputRef}
        defaultValue={PLACEHOLDER_TEXT}
        className={`${isActive ? 'on' : ''}`}
        animate={{
          top: isActive ? '5px' : '-55px',
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          left: 15,
          width: 260,
          backgroundColor: 'transparent',
          color: '#fff',
          fontSize: 23,
          fontWeight: 800,
          border: 'none',
          outline: 'none',
        }}
      />

      <span>( click the icon )</span>
    </div>
    </>
  );
}

export default AnimateSearch;
