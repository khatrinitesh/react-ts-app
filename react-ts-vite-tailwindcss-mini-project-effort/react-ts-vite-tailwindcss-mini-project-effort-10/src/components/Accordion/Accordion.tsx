import React, { useState } from 'react'
import { ACCORDION_DATA } from '../../constants/accordionData';

const AccordionComp:React.FC = () => {

     // State to manage the open/closed state of accordion tabs
  const [openTab, setOpenTab] = useState<string | null>(null);

  const handleTabClick = (id: string) => {
    setOpenTab(openTab === id ? null : id);
  };
  return (
    <>
     <h1 className="container-title">Coronavirus - Facts, advice and measures</h1>
      {ACCORDION_DATA.map((item) => (
        <div
          key={item.id}
          className={`accordion-tab ${openTab === item.id ? 'expanded' : ''}`}
          onClick={() => handleTabClick(item.id)}
        >
          <h2 className="accordion-tab__label">{item.title}</h2>
          <div
            className="accordion-tab__details"
            style={{
              maxHeight: openTab === item.id ? `${item.details.length * 50}px` : '0',
            }}
          >
            <ul className="details-list">
              {item.details.map((detail, index) => (
                <li key={index} className="details-list__item">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default AccordionComp