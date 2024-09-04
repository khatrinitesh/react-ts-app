import React from 'react';
import { navData } from '../constants/constants';
import { NavLink } from 'react-router-dom';

const Header:React.FC = () => {
  return (
    <header className='bg-black'>
      <div className="container mx-auto">
        <ul className='flex'>
            {navData.map((val,index) => (
                <li key={index}>
                    <NavLink to={val.url} className={({ isActive }) =>
                  isActive ? 'bg-red-800 active block p-2 text-white' : 'inactive block p-2 text-white'
                }>
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
