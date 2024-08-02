import React from 'react'
import { BannerProps } from '../interface/interface'

const Banner:React.FC<BannerProps> = ({title,description}) => {
  return (
    <div className='bannerContent py-10 bg-sky-200 px-5'>
      <div className="container mx-auto">
        <h3 className='title font-bold text-[32px]'>{title}</h3>
        <p className="desc">{description}</p>
        </div>
    </div>
  )
}

export default Banner