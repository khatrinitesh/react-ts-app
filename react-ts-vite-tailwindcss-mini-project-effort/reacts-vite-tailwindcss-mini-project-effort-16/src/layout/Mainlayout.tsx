import React from 'react';

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import LandscapeMobile from '../components/LandscapeMobile';

const Mainlayout:React.FC = () => {
  return (
    <>
        <div className='appContainer h-screen'>
      <Header/>
      <div className='mainContent'>
        <Outlet/>
      </div>
      <Footer/>
      </div>
      <LandscapeMobile/>
    </>
  );
}

export default Mainlayout;
