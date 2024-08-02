import React from 'react'
import { HeaderProps } from './../interface/interface';
import { Link, NavLink } from 'react-router-dom';
import { headerData } from '../constants/constants';

const Header:React.FC<HeaderProps> = ({text,url}) => {
  return (
    <header className='header bg-black'>
      <div className="container mx-auto">
        <ul className='flex'>
           {headerData.map((val,index) => (
            <li key={index}>
                <NavLink className=" text-white block p-2 font-bold" to={val.url}>{val.text}</NavLink>
            </li>
           ))} 
        </ul>
        </div>
    </header>
  )
}

export default Header