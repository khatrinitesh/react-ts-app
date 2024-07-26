import React from 'react'

// layout
import MainLayout from '../layout/MainLayout'
// pages
import Home from '../pages/Home'
import Error from '../pages/Error'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>,
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/service',
                element:<Service/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            },
        ]
    },
    {
        path:'*',
        element:<Error/>,
    },
])


export default router