import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
    <div className='appLayout h-screen'>
        <Header/>
        <div className='mainContent min-h-[calc(100vh - 118px)]'>
            <Outlet/>
        </div>
        <Footer/>
    </div> 
    </>
  );
}

export default MainLayout;
