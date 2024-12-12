import React from 'react';
import { useClickDropdownsStore } from '../store/store';
import { motion } from 'framer-motion';

const ClickDropdowns = () => {

    const {isDropdownOpen,toggleDropdown} = useClickDropdownsStore();
  return (
    <>
      <div className="dropdown-container">
      {/* Dropdown toggle button */}
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Toggle Dropdown
      </button>

      {/* Animated dropdown menu */}
      <motion.div
        className="dropdown-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isDropdownOpen ? 1 : 0,
          height: isDropdownOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }} // Ensure hidden content is not displayed when closed
      >
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </motion.div>
    </div>
    </>
  );
}

export default ClickDropdowns;
