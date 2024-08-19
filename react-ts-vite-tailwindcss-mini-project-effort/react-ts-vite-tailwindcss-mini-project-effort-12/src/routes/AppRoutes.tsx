
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// layout
import MainLayout from '../layout/MainLayout'

// pages
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
import Error from '../pages/Error';

const router = createBrowserRouter(
    createRoutesFromElements(
        [
            <>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/about"  element={<About/>}/>
                <Route path="/service"  element={<Service/>}/>
                <Route path="/contact"  element={<Contact/>}/>
            </Route>
            <Route path="*"  element={<Error/>}/>
            </>
        ]
    )
)

export default router
