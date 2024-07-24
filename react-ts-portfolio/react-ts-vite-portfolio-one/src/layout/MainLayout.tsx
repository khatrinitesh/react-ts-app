import React from "react";
// library
import { Outlet } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
   
  return (
    <>
      <div className="container mx-auto flex flex-col min-h-screen">
        <Header/>
        <div className="mainContent grow">
            <Outlet/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default MainLayout;

