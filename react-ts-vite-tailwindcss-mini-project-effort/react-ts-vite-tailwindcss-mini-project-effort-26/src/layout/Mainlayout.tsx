import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <>
      <div className="appLayout min-h-[100vh]">
        <Header />
        <div className="mainContent min-h-[calc(100vh-122px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Mainlayout;
