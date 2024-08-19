import React from 'react'
import { BannerProps } from '../interface/interface'

const Banner:React.FC<BannerProps> = ({title,desc,className}) => {
  return (
    <div className={className}>
      <div className="container mx-auto">
      <h3 className='font-bold text-[24px]'>{title}</h3>
      <p className='font-bold text-[18px]'>{desc}</p>
      </div>
    </div>
  )
}

export default Banner
