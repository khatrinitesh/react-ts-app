import React from 'react';
import { BannerTypes } from '../types';
import Banner from '../layout/Banner';

const Contact:React.FC<BannerTypes> = ({title,description}) => {
  return (
    <div className='content'>
      <Banner title="Contact" description="Aliqua ad occaecat qui nisi nisi et labore."/>
      <div className="container mx-auto px-[1rem]">
        
      </div>
    </div>
  );
}

export default Contact;
