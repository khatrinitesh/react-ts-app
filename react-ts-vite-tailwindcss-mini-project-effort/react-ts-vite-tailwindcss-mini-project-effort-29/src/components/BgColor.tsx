import React from 'react';
import { motion } from 'framer-motion';
import { useBgDropDownMenuStore } from '../store/store';

const BgColor:React.FC = () => {

  const { backgroundColor, setBackgroundColor } = useBgDropDownMenuStore();

  const handleChangeColor = (color: string) => {
    setBackgroundColor(color);
  };


  return (
    <>
      <motion.div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor,
        }}
        animate={{ backgroundColor }}
        transition={{ duration: 0.5 }}
      >
        <button onClick={() => handleChangeColor('lightblue')}>Change to Light Blue</button>
        <button onClick={() => handleChangeColor('lightgreen')}>Change to Light Green</button>
        <button onClick={() => handleChangeColor('lightcoral')}>Change to Light Coral</button>
      </motion.div>
    </>
  );
}

export default BgColor;
