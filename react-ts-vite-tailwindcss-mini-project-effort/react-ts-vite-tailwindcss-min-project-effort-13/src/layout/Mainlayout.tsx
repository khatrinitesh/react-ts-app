import React from 'react';

// LAYOUT
import Header from './Header'
import Footer from './Footer'
// LIBRARY
import { Outlet } from 'react-router-dom'

const Mainlayout:React.FC = () => {
  return (
    <>
    <div className='appContainer'>
        <Header/>
        <div className='mainContent grow'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Mainlayout