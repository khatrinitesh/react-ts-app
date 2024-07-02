import React from 'react';
// LIBRARY
import { NavLink } from 'react-router-dom';
// CONSTANTS
import { navItems } from '../constants/constants';
// INTERFACE
import { NavItem } from '../interface/interface';



const Header:Reac.FC<NavItem> = ({id,text,link}) => {
  return (
    <header className='bg-black'>
      <nav>
        <ul className="flex topnav">
          {navItems.map((item) => (
            <li key={item.id} className="mx-4">
              <NavLink to={item.link} className='text-white p-2 block hover:text-blue-600 activeclassname'>{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header