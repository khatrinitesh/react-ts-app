import React from 'react';
import { useCircleMenuStore } from '../store/store';
import { motion } from 'framer-motion';

const CircleMenu = () => {

    const {isMenuOpen,toggleMenu} = useCircleMenuStore();

    const buttonVariants = {
        open: { rotate: 45 },
        closed: { rotate: 0 },
      };
    
      const menuVariants = {
        open: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        closed: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
      };
    
      const menuItemVariants = {
        open: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        closed: { opacity: 0, x: -50, transition: { duration: 0.3 } },
      };
  return (
    <>
       <div className="circle-menu-container">
      {/* The main circle button */}
      <motion.button
        className="circle-button"
        onClick={toggleMenu}
        variants={buttonVariants}
        animate={isMenuOpen ? 'open' : 'closed'}
        initial="closed"
      >
        <span className="circle-button-icon">+</span>
      </motion.button>

      {/* The menu items */}
      <motion.div
        className="menu-items"
        variants={menuVariants}
        animate={isMenuOpen ? 'open' : 'closed'}
        initial="closed"
      >
        <motion.div className="menu-item" variants={menuItemVariants}>
          <button>Option 1</button>
        </motion.div>
        <motion.div className="menu-item" variants={menuItemVariants}>
          <button>Option 2</button>
        </motion.div>
        <motion.div className="menu-item" variants={menuItemVariants}>
          <button>Option 3</button>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
}

export default CircleMenu;
