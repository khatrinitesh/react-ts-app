import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/store';

const Alert:React.FC = () => {
    const {isAlertVisible,toggleAlert} = useStore();
  return (
    <>
     <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAlertVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '10px',
        }}
      >
        <p>This is an alert!</p>
        <button onClick={toggleAlert}>Close</button>
      </motion.div>
      <button onClick={toggleAlert}>Toggle Alert</button> 
    </>
  );
}

export default Alert;
