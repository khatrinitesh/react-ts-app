import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import Error from '../pages/Error';
import ServiceDetail from '../pages/ServiceDetail';

const router  = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/service",
                element: <Service />,
            },
            {
                path: "/service/:id",
                element: <ServiceDetail />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
    {
        path:'*',
        element:<Error/>
    }
]);


export default router