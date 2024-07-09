import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const MainLayout:React.FC = () => {
  return (
    <>
     <Header/>
      <div className='mainContent grow min-h-[calc(100vh-96px)]'>
        <Outlet/>
      </div>
     <Footer/>
    </>
  )
}

export default MainLayout