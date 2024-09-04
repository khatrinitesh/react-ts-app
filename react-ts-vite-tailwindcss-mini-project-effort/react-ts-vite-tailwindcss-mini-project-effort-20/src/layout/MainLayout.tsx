import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout:React.FC = () => {
  return (
    <>
    <div className='appContainer'>
      <Header/>
      <div className='mainContent'>
        <Outlet/>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default MainLayout;
