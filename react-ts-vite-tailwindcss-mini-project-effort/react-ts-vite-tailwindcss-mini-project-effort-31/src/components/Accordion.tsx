import React from 'react';
import { AccordionProps } from '../interface';
import { useAccordionStore } from '../store/useaccordionStore';

const Accordion:React.FC<AccordionProps> = ({sections}) => {
    const { expandedSection, toggleSection } = useAccordionStore(); 
  return (
    <>
      <div className="accordion">
      {sections.map(({ id, title, content }) => (
        <div key={id} className="accordion-item">
          <div
            className="accordion-header cursor-pointer p-4 bg-gray-300"
            onClick={() => toggleSection(id)} // Toggle section when clicked
          >
            <h2 className="font-semibold">{title}</h2>
          </div>
          {expandedSection === id && (
            <div className="accordion-content p-4 bg-gray-100">
              <p>{content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
}

export default Accordion;
