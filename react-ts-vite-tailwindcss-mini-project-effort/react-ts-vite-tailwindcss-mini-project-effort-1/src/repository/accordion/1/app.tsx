import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
    <Accordion title="Acc 1">
        <p>Content for Section 1 goes here.</p>
    </Accordion>
    <Accordion title="Acc 2">
        <p>Content for Section 2 goes here.</p>
    </Accordion>
    </>
  )
};

export default CustomApp;

interface AccordionProps {
  title: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsopen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion}>
          <div className="accordion-title">{title}</div>
          <div className={`accordion-icon ${isOpen ? "open" : ""}`}>▼</div>
        </div>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    </>
  );
};
