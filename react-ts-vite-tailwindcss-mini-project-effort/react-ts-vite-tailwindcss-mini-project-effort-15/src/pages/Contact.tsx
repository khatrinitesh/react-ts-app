import React from 'react';
import Banner from '../layout/Banner';
import FillFormComp from '../components/FillForm';

const Contact:React.FC = () => {

  return (
    <div className='content'>
      <Banner title='Contact' description='Officia excepteur duis magna laboris dolore.'/>
      <div className="container mx-auto">
        <FillFormComp/>
      </div>
    </div>
  );
}

export default Contact;
