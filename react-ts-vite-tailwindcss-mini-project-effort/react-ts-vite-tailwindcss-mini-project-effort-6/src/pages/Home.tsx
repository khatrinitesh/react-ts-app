import React, { useState } from 'react'
import Banner from '../layout/Banner'
import CustomApp from '../components/localStorage/App'

const Home = () => {
  // how to interplote 
  const name = 'michael'
  const textname = `Welcome ${name}`

  const ImgPath = import.meta.env.VITE_ASSETS_URL

  // how to add class name to element 
  const [isActive,setIsActive] = useState(false);

  const toggleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div className='content'>
        <Banner title="Home" desc="Id fugiat quis dolor velit velit labore aute ut ad."/>
        {`You have ${2 * 5} new notifications!`}
        <br />
      {textname}
      <br />
      <span onClick={toggleClick} className={isActive ? 'active text-red-500' : 'inactive'}>{isActive ? 'active' : 'inactive'}</span>
      <br />
      <img src={`${ImgPath}/images/react.svg`}/>
      <br />
      <img src={`${ImgPath}/images/wallpaper.jpeg`}/>
      <CustomApp/>
    </div>
  )
}

export default Home