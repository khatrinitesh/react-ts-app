import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = () => {
  return (
    <>
     <Header/>
     <div className="mainContent grow bg-gray-100 ">
        <Outlet/>
     </div>
     <Footer/>
    </>
  )
}

export default MainLayout