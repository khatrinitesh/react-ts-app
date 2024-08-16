import React from "react";
// library
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  Routes,
} from "react-router-dom";

// layout
import MainLayout from "../layout/MainLayout";

// pages
import About from "../pages/About";
import Home from "../pages/Home";
import Service from "./../pages/Service";
import Contact from "./../pages/Contact";
import Error from "../pages/Error";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Error />} />
    </>
  )
);

export default router;
