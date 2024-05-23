import React,{useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';


const CustomApp: React.FC<AccordionProps> = () => {
   
  
    return (
      <>
        <NotFoundPage/>
      </>
    );
  };

export default CustomApp


const NotFoundPage: React.FC = () => {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 className='font-bold text-[35px]'>404 - Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  };