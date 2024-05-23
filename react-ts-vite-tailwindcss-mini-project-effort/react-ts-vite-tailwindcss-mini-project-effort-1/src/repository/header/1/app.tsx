import React, { useState,useEffect  } from 'react';
import './style.css';

const CustomApp:React.FC = () => {
  return (
    <>
     <Header/>
    </>
  )
}

export default CustomApp



const Header: React.FC = () => {
    return (
      <header className='header'>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  