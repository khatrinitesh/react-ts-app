import React, { useState } from 'react'
import { AccordionProps } from '../../../interface/interface'
import { ACTIVE_CLASS } from '../../../constants/constants';

const AccordionApp:React.FC<AccordionProps> = ({items,defaultOpenIndex}) => {
    

    const [openIndex,setOpenIndex]= useState<number | null>(defaultOpenIndex ?? null);

    const handleToggle = (index:number) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index);
    }
  return (
    <>
    {items.map((item, index) => (
        <div key={item.id}>
          <div
            onClick={() => handleToggle(index)}
            className={`border border-1 rounded p-5 cursor-pointer accordion-header bg-sky-400 text-white ${openIndex === index ? ACTIVE_CLASS : ''}`}>
            {item.title}
          </div>
          {openIndex === index && (
            <div
              style={{ padding: '10px', border: '1px solid #ddd', borderTop: 'none', backgroundColor: '#fff' }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default AccordionApp