import React,{useState } from 'react';
import './style.css';

interface AccordionItem{
    title:string;
    content:string;
}

interface AccordionProps{
    items :AccordionItem[];
}

interface AccordionState {
    activeIndex:number | null;
}

const items = [
    {
      title: 'Section 1',
      content: 'Content for section 1'
    },
    {
      title: 'Section 2',
      content: 'Content for section 2'
    },
    {
      title: 'Section 3',
      content: 'Content for section 3'
    },
    // Add more items as needed
  ];

const CustomApp: React.FC<AccordionProps> = () => {
   
  
    return (
      <>
        <Accordion items={items}/>
      </>
    );
  };

export default CustomApp

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<AccordionState['activeIndex']>(null);
  
    const handleItemClick = (index: number) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="accordion">
        {items.map((item, index) => (
          <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="accordion-title" onClick={() => handleItemClick(index)}>
              {item.title}
            </div>
            <div className="accordion-content">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    );
  };