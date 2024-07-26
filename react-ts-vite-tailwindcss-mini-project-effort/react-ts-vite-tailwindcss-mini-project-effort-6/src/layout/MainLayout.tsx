import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
    <Header/>
    <div className='mainContent'>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout