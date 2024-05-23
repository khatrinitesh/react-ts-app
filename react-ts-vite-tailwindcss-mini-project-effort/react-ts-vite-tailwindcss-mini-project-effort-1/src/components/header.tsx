import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
  useEffect(() => {
    const resizeHeaderOnScroll = () => {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 200;
      const headerEl = document.getElementById('js-header');

      if (headerEl) {
        if (distanceY > shrinkOn) {
          headerEl.classList.add("smaller");
        } else {
          headerEl.classList.remove("smaller");
        }
      }
    };

    window.addEventListener('scroll', resizeHeaderOnScroll);

    return () => {
      window.removeEventListener('scroll', resizeHeaderOnScroll);
    };
  }, []);
  return (
    <header  id="js-header" className="header">
      <ul className='flex'>
        <li>
            <NavLink to="/"  activeclassname="active" className="text-white p-[10px] block">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about"  activeclassname="active" className="text-white p-[10px] block">About</NavLink>
        </li>
        <li>
            <NavLink to="/service"  activeclassname="active" className="text-white p-[10px] block">Service</NavLink>
        </li>
        <li>
            <NavLink to="/contact"  activeclassname="active" className="text-white p-[10px] block">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
