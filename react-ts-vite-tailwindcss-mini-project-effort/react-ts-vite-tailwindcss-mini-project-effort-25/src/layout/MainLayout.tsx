import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
    <div className="appLayout">
      <Header/>
      <div className="mainContent">
        <Outlet/>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default MainLayout;
