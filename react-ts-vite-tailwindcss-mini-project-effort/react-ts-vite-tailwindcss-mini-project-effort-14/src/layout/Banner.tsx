import React from 'react';
import { BannerProps } from '../types';

const Banner:React.FC<BannerProps> = ({title,description}) => {
  return (
    <div className='bannerContent bg-gray-400 py-10'>
      <div className="container mx-auto">
      <h3 className='font-bold text-[32px]'>{title}</h3>
      <p className='font-medium text-[15px]'>{description}</p>
      </div>
    </div>
  );
}

export default Banner;
