import React from 'react';
import { BannerTypes } from '../types';
import Banner from '../layout/Banner';

const Service:React.FC<BannerTypes> = ({title,description}) => {
  return (
    <div className='content'>
      <Banner title="Service" description="Aliqua ad occaecat qui nisi nisi et labore."/>
      <div className="container mx-auto px-[1rem]">
        
      </div>
    </div>
  );
}

export default Service;
