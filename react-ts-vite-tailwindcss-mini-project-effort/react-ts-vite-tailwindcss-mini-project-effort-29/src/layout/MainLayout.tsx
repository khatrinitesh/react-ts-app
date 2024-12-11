import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className='appLayout'>
      <Header/>
      <div className='mainContent  min-h-[calc(100vh-138px)]'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
