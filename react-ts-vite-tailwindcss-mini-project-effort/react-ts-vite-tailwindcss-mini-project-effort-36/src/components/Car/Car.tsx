import React from 'react';
import { carConfig } from '../../constants/constants';
import { motion } from 'framer-motion';
import Controls from './Controls';
import useCarStore from '../../store/useCarStore';

const Car:React.FC = () => {
   

  return (
    <>
     <div style={{ padding: 40 }}>
    <h1>Car Running with Zustand + Framer Motion</h1>
    <div style={{ overflow: 'hidden', width: 900 }}>
      <Car />
    </div>
    <Controls />
  </div>
    </>
  );
}

export default Car;

function Example(){
    const { isRunning } = useCarStore();
    return(
        <>
          <motion.img
      src={carConfig.imageUrl}
      alt="Car"
      initial={{ x: 0 }}
      animate={{ x: isRunning ? carConfig.distance : 0 }}
      transition={{ duration: carConfig.duration, ease: 'linear' }}
      style={{ width: 100, height: 'auto', position: 'relative' }}
    />
        </>
    )
}
