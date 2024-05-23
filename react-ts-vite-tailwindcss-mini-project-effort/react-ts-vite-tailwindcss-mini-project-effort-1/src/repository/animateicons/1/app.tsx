import React from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi"; // Assuming you're using Feather Icons, replace with your preferred icon library

const CustomApp = () => {
  return (
    <>
      <AnimatedIcon />
    </>
  );
};

export default CustomApp;

const AnimatedIcon: React.FC = () => {
  return (
    <>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <FiHeart size={24} />
      </motion.div>
    </>
  );
};
