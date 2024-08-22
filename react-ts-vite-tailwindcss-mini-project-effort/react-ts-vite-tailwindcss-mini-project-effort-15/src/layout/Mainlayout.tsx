import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Mainlayout:React.FC = () => {
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

export default Mainlayout;
