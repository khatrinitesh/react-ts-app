import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../layout/Mainlayout';
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Service = lazy(() => import('../pages/Service'));
const Contact = lazy(() => import('../pages/Contact'));

import Error from '../pages/Error';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        errorElement:<Error/>,
        children:([
            {
                index:true,
                element:(
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home/>
                    </Suspense>
                )
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/service",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Service />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Contact />
                    </Suspense>
                ),
            },
        ])
    },
])

export default router;
