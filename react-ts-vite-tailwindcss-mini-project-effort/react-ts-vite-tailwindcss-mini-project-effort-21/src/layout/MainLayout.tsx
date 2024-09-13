import React from "react";
// components
import Header from "./Header";
import Footer from "./Footer";
// library
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="appContainer">
        <Header />
        <div className="mainContent">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
