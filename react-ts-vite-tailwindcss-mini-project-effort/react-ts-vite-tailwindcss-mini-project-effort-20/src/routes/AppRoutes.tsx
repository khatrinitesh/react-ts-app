import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Service from '../pages/Service';
import About from '../pages/About';
import Contact from '../pages/Contact';
import MainLayout from './../layout/MainLayout';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:([
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/service",
                element:<Service/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ])
    },
    {
        path:"/",
        element:<Error/>
    }
])

export default AppRoutes;
