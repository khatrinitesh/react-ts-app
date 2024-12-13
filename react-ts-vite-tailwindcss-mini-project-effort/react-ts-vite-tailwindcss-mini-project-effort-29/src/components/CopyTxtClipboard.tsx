import React from 'react';
import { motion } from 'framer-motion';
import { useCopyTxtStore } from '../store/store';

const CopyTxtClipboard = () => {

    const {showBox,toggleBox} = useCopyTxtStore()
  return (
    <>
       <button onClick={toggleBox}>Toggle Box</button>
       {/* Use Framer Motion to animate the box */}
      <motion.div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'skyblue',
          marginTop: '20px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBox ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        Animated Box
      </motion.div>
    </>
  );
}

export default CopyTxtClipboard;
