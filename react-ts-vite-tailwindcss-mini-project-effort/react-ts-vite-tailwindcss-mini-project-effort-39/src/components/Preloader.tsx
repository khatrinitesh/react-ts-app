import React from 'react';
import { DEFAULT_PRELOADER_MESSAGE } from '../constants/constants';
import { motion } from "framer-motion";
import type { PreloaderProps } from '../interface';
import '../styles/preloader.css';

const Preloader:React.FC<PreloaderProps> = ({message = DEFAULT_PRELOADER_MESSAGE}) => {
  return (
    <>
       <div className="preloader-wrapper">
      <motion.div
        className="preloader-box"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <motion.div
          className="preloader-spinner"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        <p className="preloader-message">{message}</p>
      </motion.div>
    </div>
    </>
  );
}

export default Preloader;
