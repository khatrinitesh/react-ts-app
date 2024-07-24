import React from 'react';
import { BannerProps } from '../interface/interface';


const Banner:React.FC<BannerProps> = ({title,desc}) => {
  return (
    <div className='bannerContent py-10 bg-sky-400'>
      <div className="container mx-auto">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Banner