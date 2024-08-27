import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Mainlayout = () => {
  return (
    <div className='appContainer'>
      <Header/>
      <div className='mainContent'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default Mainlayout;
