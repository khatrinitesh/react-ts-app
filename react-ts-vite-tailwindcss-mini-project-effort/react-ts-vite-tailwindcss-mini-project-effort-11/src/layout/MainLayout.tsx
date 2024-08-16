import React from 'react';

import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <div className='h-screen flex flex-col '>
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