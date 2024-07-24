import React from "react";
// LIBRARY
import { createBrowserRouter } from "react-router-dom";

// LAYOUT
import Main from "../layout/Main";
// PAGES
import About from "./../pages/About";
import Service from "../pages/Service";
import Contact from "./../pages/Contact";
import Error from "../pages/Error";
import ServiceDetail from "../pages/ServiceDetail";

const routes = [
  {
    path: "/",
    element: <Main />,
    children: [
      {path: "/about",element: <About />},
      {path: "/service",element: <Service /> },
      {path: "/service/:id",element: <ServiceDetail /> },
      {path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "*",
    element: <Error />,
  }
];

const router = createBrowserRouter(routes);

export default router;
