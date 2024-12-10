import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <Header/>
      <div className='mainContent min-h-[calc(100vh-128px)]'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default MainLayout;
