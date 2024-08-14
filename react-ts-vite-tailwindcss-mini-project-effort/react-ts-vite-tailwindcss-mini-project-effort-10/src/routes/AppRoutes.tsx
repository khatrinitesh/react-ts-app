import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

// layout
import MainLayout from '../layout/MainLayout'

// pages
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
import Error from '../pages/Error'

// constants
import { pathnames } from '../constants/pathnames'

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                path:pathnames.home,
                element:<Home/>,   
            },
            {
                path:pathnames.about,
                element:<About/>,   
            },
            {
                path:pathnames.service,
                element:<Service/>,   
            },
            {
                path:pathnames.contact,
                element:<Contact/>,   
            },
        ]
    },
    {
        path:"*",
        element:<Error/>,   
    },
])

export default router