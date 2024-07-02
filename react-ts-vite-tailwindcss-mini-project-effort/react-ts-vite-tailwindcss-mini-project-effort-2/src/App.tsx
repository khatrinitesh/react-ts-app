
import React from 'react';
// LIBRARY
import { Routes,Route } from 'react-router-dom';
// STYLING
import './index.css';

// LAYOUT
import MainLayout from './layout/MainLayout';
// PAGES 
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Service = React.lazy(() => import("./pages/Service"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Error = React.lazy(() => import("./pages/Error"));


function CustomApp() {

  return (
    <>
        <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
      </Routes>
        </React.Suspense>
    </>
  )
}

export default CustomApp
