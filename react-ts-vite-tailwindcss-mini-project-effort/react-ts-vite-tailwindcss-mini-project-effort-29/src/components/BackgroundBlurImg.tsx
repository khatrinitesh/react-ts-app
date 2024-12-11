import React from 'react';
import { useBlurImgStore } from '../store/store';
import { motion } from 'framer-motion';

const BackgroundBlurImg:React.FC<BackgroundImgProps> = ({imgUrl}) => {
    const {blurinensity} = useBlurImgStore()
  return (
    <>
       <motion.div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${imgUrl})`,
        filter: `blur(${blurinensity}px)`,  // Apply the blur effect based on the intensity
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Additional content can go here */}
    </motion.div>
    </>
  );
}

export default BackgroundBlurImg;
