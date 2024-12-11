import React, { useState } from 'react';
import { AccordionProps } from '../interface';
import { motion } from 'framer-motion';

const Accordion:React.FC<AccordionPropsnProps> = ({title,content}) => {

    const [open,setOpen] = useState(false);

    const toggleAccordion = () => setOpen((prev) => !prev)

  return (
    <>
     <button onClick={toggleAccordion}>{title}</button> 
     <motion.div
        initial={{ height: 0 }}
        animate={{ height: open ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <p>{content}</p>
      </motion.div>
    </>
  );
}

export default Accordion;
