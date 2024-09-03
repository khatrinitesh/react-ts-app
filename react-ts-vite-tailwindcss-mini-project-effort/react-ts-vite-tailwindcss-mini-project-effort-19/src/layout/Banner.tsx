import React from 'react'
import { BannerType } from '../types'

const Banner:React.FC<BannerType> = ({bannerTitle,bannerDesc}) => {
  return (
    <div className='bannerContent py-5 bg-violet-300'>
      <div className="container mx-auto">
        <h3>{bannerTitle}</h3>
        <p>{bannerDesc}</p>
      </div>
    </div>
  )
}

export default Banner
