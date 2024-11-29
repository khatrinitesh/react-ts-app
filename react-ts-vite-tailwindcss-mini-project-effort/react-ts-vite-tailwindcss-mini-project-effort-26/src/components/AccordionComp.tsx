import React from 'react';
import { motion } from 'framer-motion';
import { useAccordionStore } from '../store/store';
import { ACCORDION_ITEMS } from '../constants/accordionData';

const AccordionComp = () => {

    const {expanded, toggle} =useAccordionStore();
  return (
    <>
     {ACCORDION_ITEMS.map((item) => (
        <div key={item.id} className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => toggle(item.id)}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <span>{item.title}</span>
            <motion.span
              initial={false}
              animate={{ rotate: expanded === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ marginLeft: '10px', display: 'inline-block' }}
            >
              ▼
            </motion.span>
          </div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: expanded === item.id ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="accordion-body"
            style={{
              overflow: 'hidden',
            }}
          >
            <p>{item.body}</p>
          </motion.div>
        </div>
      ))}
    </>
  );
}

export default AccordionComp;
