import React from 'react'
import Banner from '../layout/Banner'

const Home:React.FC = () => {
  return (
    <div className='content'>
      <Banner
        bannerTitle="Home"
        bannerDesc="Nostrud magna dolor dolor anim deserunt."
      />
      <div className="container mx-auto"></div>
    </div>
  )
}

export default Home
