import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
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
                path:"/services",
                element:<Services/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ],
        
    },
      // Fallback route for any undefined paths
      {
        path:"*",
        element:<Error/>
    }
])

export default AppRoutes;
