import React from 'react'
// LIBRARY
import { Outlet } from 'react-router-dom'
// COMPONENTS
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
    {/* S > HEADER */}
    <Header/>
    {/* E > HEADER */}

    {/* S > MAIN CONTENT */}
    <div className='mainContent grow min-h-[calc(100vh-80px)]'>
        <Outlet/>
    </div>
    {/* E > MAIN CONTENT */}

    {/* S > FOOTER */}
    <Footer/>
    {/* E > FOOTER */}
    </>
  )
}

export default MainLayout