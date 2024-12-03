import React from 'react';
import { topNavData } from '../constants/topnavData';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header bg-black py-[20px]'>
      <div className="container mx-auto">
        <ul className='flex gap-[10px]'>
         {topNavData.map((val,index) => (
            <li key={index}>
              <NavLink
    className={({ isActive, isPending }) =>
      isPending
        ? "pending text-white transition-all duration-100 delay-100 bg-red-500 p-[5px] block" // background red for pending
        : isActive
        ? "active text-white transition-all duration-100 delay-100 bg-red-500 p-[5px] block" // background red for active
        : "text-white font-bold transition-all duration-100 delay-100 p-[5px] block" // default styling
    }
    to={val.url}
  >
    {val.title}
  </NavLink>
            </li>
         ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
