import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <div className='appContainer grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-300'>
    <Header/> 
    <div className='mainContent grow'>
        <Outlet/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default MainLayout