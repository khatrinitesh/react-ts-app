import React from 'react'
import Banner from '../layout/Banner'

const Error:React.FC = () => {
  return (
    <div className='content'>
      <Banner
        bannerTitle="Error"
        bannerDesc="Nostrud magna dolor dolor anim deserunt."
      />
      <div className="container mx-auto"></div>
    </div>
  )
}

export default Error
