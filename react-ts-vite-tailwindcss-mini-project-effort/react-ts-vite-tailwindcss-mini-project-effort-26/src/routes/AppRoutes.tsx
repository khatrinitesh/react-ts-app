import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout';
import Home from '../pages/Home';
import About from './../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = createBrowserRouter([
  {
    path:"/",
    element:<Mainlayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"*",
        element:<Navigate to ="/"/>
      },
    ]
  }
])

export default AppRoutes;
