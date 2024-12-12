import React from 'react';
import { useClearInputFieldStore } from '../store/store';
import { motion } from 'framer-motion';

const ClearIputField = () => {

    const {isFieldInput,setIsFieldInput,clearInput} = useClearInputFieldStore();
  return (
    <>
       <motion.input
        type="text"
        value={isFieldInput}
        onChange={(e) => setIsFieldInput(e.target.value)} // Update input value in the store
        placeholder="Type something..."
        className="input-field"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      

         {/* Clear Button */}
      <motion.button
        onClick={clearInput} // Call clearInput from Zustand store
        className="clear-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Clear
      </motion.button>
    </>
  );
}

export default ClearIputField;
