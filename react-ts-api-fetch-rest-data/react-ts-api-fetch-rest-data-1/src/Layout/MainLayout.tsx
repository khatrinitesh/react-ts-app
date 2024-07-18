import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Header/>
        <div className='mainContent grow'>
            <Outlet/>
        </div>
    <Footer/>
    </>
  )
}

export default MainLayout