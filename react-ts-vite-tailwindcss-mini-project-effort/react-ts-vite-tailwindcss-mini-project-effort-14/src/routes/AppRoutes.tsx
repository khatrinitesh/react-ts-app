import React from 'react';
import { createBrowserRouter } from 'react-router-dom';


import MainLayout from '../layout/MainLayout';
import Home from './../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import Contact from '../pages/Contact';
import Error from './../pages/Error';

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
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
        ]
    },
    {
        path:'*',
        element:<Error/>
    }
])

export default router;
