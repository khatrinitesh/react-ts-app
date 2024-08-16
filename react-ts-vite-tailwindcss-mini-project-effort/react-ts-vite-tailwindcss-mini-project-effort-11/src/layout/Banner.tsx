import React from 'react'
import { BannerType } from '../types'

const Banner:React.FC<BannerType> = ({title,desc}) => {
  return (
    <div className='bannerContent'>
      <div className="container mx-auto">
      <h2 className='font-bold text-[32px]'>{title}</h2>
      <p className='font-bold text-[18px]'>{desc}</p>
      </div>  
    </div>
  )
}

export default Banner