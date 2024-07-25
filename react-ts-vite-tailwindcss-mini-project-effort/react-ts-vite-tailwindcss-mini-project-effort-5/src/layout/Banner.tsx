import React from 'react'
import { BannerProps } from '../interface/interface'

const Banner:React.FC<BannerProps> = ({title,description}) => {
  return (
    <div className='bannerContent py-10 px-5 bg-sky-500'>
        <div className="container mx-auto">
        <h3 className='font-bold text-[32px]'>{title}</h3>
        <p className='font-bold text-[15px]'>{description}</p>
        </div>
    </div>
  )
}

export default Banner