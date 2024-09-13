import React from "react";
// library
import { Outlet } from "react-router-dom";

// component
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
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
