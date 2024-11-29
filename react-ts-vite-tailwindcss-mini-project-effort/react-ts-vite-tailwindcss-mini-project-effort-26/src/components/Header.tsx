import React from 'react';
import { NavLink } from 'react-router-dom';
import { topNavLinks } from '../constants/topnavData';

const Header = () => {
  return (
    <header className='header py-[10px] bg-black'>
      <div className="container mx-auto">
        <ul className='flex gap-[10px] m-0 p-0 items-center'>
          {topNavLinks.map((val,index) => (
            <li key={index}>
              <NavLink
                to={val.link}
                className={({ isActive }) => 
                  isActive ? 'bg-red-400 text-white font-bold block p-[10px]' : 'text-white font-bold p-[10px]'
                }
              >
                {val.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
