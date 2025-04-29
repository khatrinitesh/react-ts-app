import React from 'react';
import { accData } from '../constants/constants';
import Accordion from './Accordion';

const AccordionDataMap:React.FC = () => {
  return (
    <>
       <div style={{  margin: '2rem auto', padding: '0 1rem' }}>
      {accData.map((item) => (
        <Accordion key={item.id} item={item} />
      ))}
    </div>
    </>
  );
}

export default AccordionDataMap;
