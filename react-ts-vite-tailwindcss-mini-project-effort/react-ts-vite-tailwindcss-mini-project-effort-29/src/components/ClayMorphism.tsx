import React from 'react';
import { useClayStore } from '../store/store';
import { motion } from 'framer-motion';

const ClayMorphism = () => {

    const {isModalOpen,toggleModal} = useClayStore();
  return (
    <>
      <motion.div
      className="clay-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={toggleModal}
    >
      <h2>Claymorphism Card</h2>
      <p>This is an example of a Claymorphism style card.</p>

      {isModalOpen && (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Modal Opened!</h3>
          <p>This modal was triggered by clicking the Clay Card.</p>
        </motion.div>
      )}
    </motion.div> 
    </>
  );
}

export default ClayMorphism;
