import React, { useState } from 'react'
import { useCounterCharacterStore } from '../store/store'
import { motion } from 'framer-motion';

const CharacterCounter = () => {
    const {count,setCount} = useCounterCharacterStore();
    const [text,setText] = useState<string>('');
    const maxlimit = 200;
    const handleChange =(e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        if(newText.length <= maxlimit){
            setText(newText)
            setCount(newText.length);
        }
    }
  return (
    <>
    <motion.div
        style={{
          marginBottom: '10px',
        }}
        animate={{
          opacity: [0, 1], // Animate opacity for a fade-in effect
        }}
        transition={{
          duration: 0.5, // Fade-in duration
        }}
      >
 <textarea placeholder="Start typing..."
          style={{ fontSize: '16px', padding: '10px', width: '100%' }} value={text} onChange={handleChange}></textarea>
       <motion.div
        animate={{
          opacity: [0, 1], // Animate opacity for the counter
        }}
        transition={{
          duration: 0.5, // Fade-in duration
        }}
      >
      </motion.div>
     
        <p>Character count: {count}</p>
      </motion.div>
    </>
  )
}

export default CharacterCounter
