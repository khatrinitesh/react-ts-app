import React from 'react';
// library
import { createBrowserRouter } from 'react-router-dom';

// layout
import MainLayout from '../layout/MainLayout';

// pages
import Home from '../pages/Home';
import About from './../pages/About';
import Service from './../pages/Service';
import Contact from './../pages/Contact';
import Error from '../pages/Error';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:([
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/service",
                element:<Service/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
        ])
    },
    {
        path:"*",
        element:<Error/>,
    },
])

export default AppRoutes;
