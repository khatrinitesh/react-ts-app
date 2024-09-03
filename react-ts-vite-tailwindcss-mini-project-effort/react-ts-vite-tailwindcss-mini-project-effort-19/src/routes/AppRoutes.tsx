
// library
import { createBrowserRouter } from 'react-router-dom'

// layout
import Mainlayout from '../layout/Mainlayout'
// pages
import Home from '../pages/Home'
import Error from '../pages/Error'
import Contact from '../pages/Contact'
import Service from '../pages/Service'
import About from '../pages/About'

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
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
        path:"*",
        element:<Error/>
    },
])

export default AppRoutes
