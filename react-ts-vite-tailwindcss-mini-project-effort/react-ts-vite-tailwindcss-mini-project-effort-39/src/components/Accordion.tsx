import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AccordionProps } from "../interface";
import { FaChevronDown } from "react-icons/fa"; // or use an SVG
import { ACCORDION_DATA } from "../constants/constants";

function CustomAccordion(){
    return(
        <>
       <AccordionList/>
        </>
    )
}

export default CustomAccordion;

const AccordionList:React.FC = () => {
      const [openId, setOpenId] = useState<number>(null);

  const handleToggle = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id)); // toggle logic
  };

    return(
        <>
         <div className="max-w-xl mx-auto mt-8">
      {ACCORDION_DATA.map((item) => (
        <Accordion
          key={item.id}
          item={item}
          isOpen={item.id === openId}
          onToggle={handleToggle}
        />
      ))}
    </div>
        </>
    )
}

const Accordion: React.FC<AccordionProps> = ({ item,isOpen, onToggle  }) => {
  
  return (
    <>
       <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => onToggle(item.id)}
        className="flex justify-between gap-[10px] cursor-pointer items-center w-full text-left"
      >
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className=""
        >
          <FaChevronDown />
        </motion.span>
        <span className="text-lg w-full block font-medium">{item.title}</span>

        
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mt-2 text-gray-600"
          >
            <div className="pt-2">{item.description}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};
