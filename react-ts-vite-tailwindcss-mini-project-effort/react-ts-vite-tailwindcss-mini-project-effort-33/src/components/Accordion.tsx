import React from 'react';
import { AccordionItem } from '../interface';
import { useAccordionStore } from '../store/useAccordionStore';
import {motion, AnimatePresence } from 'framer-motion';
import { ANIMATION_DURATION } from '../constants/constants';


interface Props{
    item:AccordionItem
}
const Accordion:React.FC<Props> = ({item}) => {

    const { openId, toggle } = useAccordionStore();
  const isOpen = openId === item.id;

  return (
    <>
       <div className={`accordion-item ${isOpen ? 'activeClass' : ''}`}>
      <button
        onClick={() => toggle(item.id)}
        style={{
          background: 'none',
          border: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
      >
        <span>{item.title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: ANIMATION_DURATION }}
          style={{ display: 'inline-block' }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
            style={{ overflow: 'hidden', paddingTop: '0.5rem' }}
          >
            <div style={{ fontSize: '1rem', color: '#555' }}>
              {item.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
}

export default Accordion;
