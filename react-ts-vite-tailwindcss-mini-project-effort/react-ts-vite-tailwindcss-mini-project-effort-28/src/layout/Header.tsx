import React from 'react';
import { NavLink } from 'react-router-dom';
import { topNavData } from '../constants/topNavData';

const Header = () => {
  return (
    <header className='header bg-black py-[20px]'>
      <div className="container mx-auto">
        <ul className='flex gap-[10px]'>
            {topNavData.map((item,index) => (
                <li key={index}>
                    <NavLink to={item.url} className={({isActive}) => isActive ? 'text-white p-[5px] bg-red-500' : 'p-[5px] text-white'}>{item.title}</NavLink>
                </li>
            ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
