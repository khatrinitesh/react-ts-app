import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
    <div className='appcontainer h-full'>
     <Header/>
     <div className='mainContent'>
        <Outlet/>
     </div>
     <Footer/>
     </div>
    </>
  )
}

export default MainLayout