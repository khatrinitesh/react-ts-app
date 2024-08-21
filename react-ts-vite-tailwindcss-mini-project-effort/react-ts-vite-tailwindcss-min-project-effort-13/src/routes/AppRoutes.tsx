
import { createBrowserRouter } from 'react-router-dom';

import Mainlayout from '../layout/Mainlayout'
import About from '../pages/About'
import ErrorBoundary from '../pages/Error'
import Contact from './../pages/Contact';
import Service from '../pages/Service'
import Home from './../pages/Home';
import ServiceDetail from '../pages/ServiceDetail';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        errorElement:<ErrorBoundary/>,
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
                path:"/service",
                element:<Service/>
            },
            {
                path:"/service/:id",
                element:<ServiceDetail/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ]
    }
])

export default router