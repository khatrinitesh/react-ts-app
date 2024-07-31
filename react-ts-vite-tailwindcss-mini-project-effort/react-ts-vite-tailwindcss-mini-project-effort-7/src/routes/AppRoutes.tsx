import { createBrowserRouter } from "react-router-dom"
import Main from "../layout/Main"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Service from "../pages/Service"
import Error from "../pages/Error"

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
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
        element:<Error/>
    }
])
export default router
