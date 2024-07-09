import React from 'react';
import { BannerProps } from '../interface/interface';

const Banner:React.FC<BannerProps> = ({title,description,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} p-10 bannerContent`}>
      <div className='container mx-auto'>
        <h3 className='font-bold text-[32px]'>{title}</h3>
        <p className='font-medium text-[16px]'>{description}</p>
        </div>
    </div>
  )
}

export default Banner