import React, { useEffect } from 'react'
import { useBgColorScrollStore } from '../store/store'
import { motion } from 'framer-motion';

const ChangeBgScroll = () => {
    const {backgroundColor,setBackgroundColor} = useBgColorScrollStore()

    // Function to change background color based on scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY < 100) {
      setBackgroundColor('lightblue');
    } else if (scrollY < 300) {
      setBackgroundColor('lightgreen');
    } else if (scrollY < 500) {
      setBackgroundColor('lightcoral');
    } else {
      setBackgroundColor('lightgoldenrodyellow');
    }
  };

   // Attach scroll event listener
   useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
        <motion.div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor,
        transition: 'background-color 0.3s ease', // smooth transition for background color
      }}
      animate={{ backgroundColor }}
    >
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Scroll to Change Background Color</h1>
      </div>
    </motion.div>
    </>
  )
}

export default ChangeBgScroll
