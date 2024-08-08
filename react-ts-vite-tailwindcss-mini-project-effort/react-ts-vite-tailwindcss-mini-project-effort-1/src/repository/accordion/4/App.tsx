import React, { useState } from 'react';
import './style.css';

const accordionItems:AccordionItem[] = [
    { title: 'Section 1', content: 'Content for section 1', isOpen: true },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
]

const App = () => {
  return (
    <>
        <AccordionComp items={accordionItems}/>
    </>
  )
}

export default App

interface AccordionItem{
    title:string;
    content:string;
    isOpen?:boolean; // Optional prop to define if the section is initially open
}

interface AccordionProps{
    items:AccordionItem[]
}

const AccordionComp:React.FC<AccordionProps> = ({items}) => {
    // Use state to manage the open item index
    const [openIndex,setOpenIndex] = useState<number | null>(null);


      // Toggle function for opening and closing accordion items
    const toggleItem = (index:number) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return(
        <>
         {items.map((val,index) => (
            <div key={index}>
                <button onClick={() => toggleItem(index)} className={`accordion-button ${openIndex === index ? 'active' : ''}`}>{val.title}</button>
                {openIndex === index && (
                    <>
                    <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                        <p>{val.content}</p>
                    </div>
                    </>
                )}
            </div>
         ))}
        </>
    )
}

