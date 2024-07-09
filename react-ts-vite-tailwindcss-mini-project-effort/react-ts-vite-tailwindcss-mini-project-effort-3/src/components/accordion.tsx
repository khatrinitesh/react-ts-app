import React, { useState } from 'react';
// INTERFACE
import { AccordionProps,AccordionItem } from './../interface/interface';
// CONSTANTS
import { accordionItemStyles } from './../constants/constants';

const AccordionComp:React.FC<AccordionProps> = ({items}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <>
     {items.map((item, index) => (
                <div key={index} style={accordionItemStyles.container}>
                    <div
                        style={accordionItemStyles.header}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div style={accordionItemStyles.title}>{item.title}</div>
                        <svg
                            className={`w-6 h-6 ${
                                activeIndex === index ? 'transform rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    activeIndex === index
                                        ? 'M5 15l7-7 7 7'
                                        : 'M19 9l-7 7-7-7'
                                }
                            />
                        </svg>
                    </div>
                    <div
                        style={
                            activeIndex === index
                                ? {
                                      ...accordionItemStyles.content,
                                      ...accordionItemStyles.activeContent,
                                  }
                                : accordionItemStyles.content
                        }
                    >
                        {item.content}
                    </div>
                </div>
            ))}
    </>
  )
}

export default AccordionComp