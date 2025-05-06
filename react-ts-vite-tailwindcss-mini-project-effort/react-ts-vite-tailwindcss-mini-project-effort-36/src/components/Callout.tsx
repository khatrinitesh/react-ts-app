import React from "react";
import type { CalloutProps } from "../interface";
import { motion } from 'framer-motion';

const bgColorMap = {
  info: "lightblue",
  success: "lightgreen",
  error: "#f8d7da",
  warning: "#fff3cd",
};

const Callout = ({type,message}:CalloutProps) => {
  return (
    <>
     <motion.div
      className="callout-box"
      style={{ backgroundColor: bgColorMap[type] }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <strong>{type.toUpperCase()}:</strong> {message}
    </motion.div>
    </>
  )
};

export default Callout;
