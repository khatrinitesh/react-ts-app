import React from 'react';
import { useCheckedStore } from '../store/store';
import { motion } from 'framer-motion';

const CheckCheckbox = () => {

    const {isChecked,toggleChecked} = useCheckedStore();
  return (
    <>
     <div className="checkbox-container" style={{ margin: '20px' }}>
      <motion.label
        style={{ display: 'inline-flex', alignItems: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleChecked}
          style={{ marginRight: '10px' }}
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isChecked ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '4px',
            border: '2px solid #3498db',
            backgroundColor: isChecked ? '#3498db' : 'transparent',
            position: 'relative',
          }}
        >
          {isChecked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: '3px',
                left: '3px',
                width: '12px',
                height: '12px',
                backgroundColor: '#fff',
                borderRadius: '50%',
              }}
            />
          )}
        </motion.div>
        <span style={{ marginLeft: '10px' }}>Check this box</span>
      </motion.label>
    </div>
    </>
  );
}

export default CheckCheckbox;
