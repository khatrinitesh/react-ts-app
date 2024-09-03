import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Mainlayout:React.FC = () => {
  return (
    <>
    <div className='appcontainer'>
      <Header/>
      <div className='mainContent'>
        <Outlet/>
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default Mainlayout
