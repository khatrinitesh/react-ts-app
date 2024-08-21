import React from 'react'
import { BannerProps } from '../interface'

const Banner:React.FC<BannerProps> = ({title,desc}) => {
  return (
    <div className='bg-slate-300 py-10 px-5'>
        <div className="container mx-auto">
            <h3 className='font-bold text-[16px] md:text-[20px]'>{title}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Banner