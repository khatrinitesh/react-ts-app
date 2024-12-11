import React from 'react';
import { topnavData } from '../constants/constants';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header py-[20px] bg-black'>
      <div className="container mx-auto">
        <ul className='flex gap-[20px]'>
            {topnavData.map((val,index) => (
                <li key={index}>
                    <NavLink to={val.url} className={({isActive}) => isActive ? 'active bg-red-500 text-white block p-[5px]' : 'active text-white block p-[5px]'}>{val.label}</NavLink>
                </li>
            ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
