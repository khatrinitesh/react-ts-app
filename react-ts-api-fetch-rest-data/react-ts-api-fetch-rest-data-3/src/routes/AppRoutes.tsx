import React from 'react';
// library
import { createBrowserRouter } from 'react-router-dom';
// layout
import MainLayout from '../layout/MainLayout';
// pages
import Home from './../pages/Home';
import About from './../pages/About';
import Service from './../pages/Service';
import Contact from './../pages/Contact';
import Error from './../pages/Error';

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home /> // home page
            },
            {
                path: "about",
                element: <About /> // about page
            },
            {
                path: "service",
                element: <Service /> // service page
            },
            {
                path: "contact",
                element: <Contact /> // contact page
            },
        ]
    },
    {
        path: '*',
        element: <Error /> // error page for not found
    }
]);

export default AppRoutes;
