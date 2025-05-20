import React from "react";
// library
import { createBrowserRouter } from "react-router-dom";
// pages
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
// layout
import MainLayout from "../layouts/MainLayout";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default AppRoutes;
