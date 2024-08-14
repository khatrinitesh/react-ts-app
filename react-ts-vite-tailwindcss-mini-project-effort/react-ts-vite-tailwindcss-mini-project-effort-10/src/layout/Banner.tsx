import React from 'react'
import { BannerType } from '../types'

const Banner:React.FC<BannerType> = ({title,desc,className}) => {
  return (
    <div className={`bannerContent ${className}`}>
      <div className="container mx-auto">
      <h3 className='font-bold text-[32px] text-white'>{title}</h3>
      <p className='text-white text-[16px]'>{desc}</p>
      </div>
    </div>
  )
}

export default Banner