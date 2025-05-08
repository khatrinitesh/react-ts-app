import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AccordionItem } from '../interface';
import { useAccordionStore } from '../store/useAccordionStore';
import  '../styling/accordion.css';

interface Props {
    data: AccordionItem[];
  }

const Accordion:React.FC<Props> = ({data}) => {
    const { openId, toggleAccordion } = useAccordionStore();
  return (
    <>
       <section className="relative w-full flex justify-center items-center min-h-screen bg-gray-100">
      <section className="main absolute top-1/2 left-1/2 w-[40%] max-w-[30em] min-w-[15em] transform -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden bg-white shadow-lg">
        <header className="title text-white bg-green-700 text-center font-bold py-4">Flexible accordion with pseudo element indicators</header>
        {data.map((item) => (
          <section key={item.id} className={`border-b last:border-none ${openId === item.id ? 'open' : ''} relative`}>
            <button
              className="absolute right-0 top-0 h-12 w-12 pointer-events-none"
              aria-hidden
            >
              <span
                className={`block absolute top-1/2 left-1/2 h-3 w-1 bg-lime-600 rounded transform transition-all duration-300 ease-in-out ${
                  openId === item.id ? 'rotate-45 -translate-x-1/2 -translate-y-1/2 h-[14px]' : '-rotate-45 -translate-x-[75%] -translate-y-1/2'
                }`}
              ></span>
              <span
                className={`block absolute top-1/2 left-1/2 h-3 w-1 bg-lime-600 rounded transform transition-all duration-300 ease-in-out ${
                  openId === item.id ? '-rotate-45 -translate-x-1/2 -translate-y-1/2 h-[14px]' : 'rotate-45 translate-x-[75%] -translate-y-1/2'
                }`}
              ></span>
            </button>
            <header
              onClick={() => toggleAccordion(item.id)}
              className={`w-full overflow-hidden h-12 bg-white cursor-pointer font-bold text-gray-600 px-4 pr-10 flex items-center hover:bg-green-50`}
            >
              {item.title}
            </header>
            <AnimatePresence initial={false}>
              {openId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <article className="bg-white bg-opacity-70 p-4 text-sm">{item.content}</article>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}
      </section>
    </section>
    </>
  );
}

export default Accordion;
