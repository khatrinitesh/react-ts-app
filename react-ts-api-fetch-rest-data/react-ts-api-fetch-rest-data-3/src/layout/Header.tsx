import React from 'react';
import { NavLink } from 'react-router-dom';
import { navData } from './../constants/navlinks';

const Header:React.FC<HeaderTypes> = ({url,label}) => {
  return (
    <header className='header py-3 bg-black'>
      <div className="container px-[1rem] mx-auto">
        <ul className='flex'>
            {navData.map((val,index) => (
                <li key={index}>
                    <NavLink  className={({ isActive }) => 
                        isActive ? "text-white p-2 block bg-highlightcolor" : "text-white p-2 block"
                      } to={val.url}>{val.label}</NavLink>
                </li>
            ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
