import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// layout
import MainLayout from '../layout/MainLayout';

// pages
import Home from './../pages/Home';
import About from './../pages/About';
import ProductList from './../pages/ProductList';
import Contact from '../pages/Contact';
import ProductCard from '../pages/ProductCard';

const AppRoutes  = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/productlist',
                element:<ProductList/>
            },
            {
                path:'/productlist/:id',
                element:<ProductCard/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'*',
                element:<Navigate to="/"/>
            },
        ]
    },
])
export default AppRoutes;
