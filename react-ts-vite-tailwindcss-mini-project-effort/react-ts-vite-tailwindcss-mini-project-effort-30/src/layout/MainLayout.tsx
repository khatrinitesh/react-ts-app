import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout:React.FC = () => {
  return (
    <>
    <div className='appLayout'>
     <Header/>
     <div className='mainContent min-h-[calc(100vh-108px)]'>
        <Outlet/>
     </div>
     <Footer/> 
     </div>
    </>
  );
}

export default MainLayout;
