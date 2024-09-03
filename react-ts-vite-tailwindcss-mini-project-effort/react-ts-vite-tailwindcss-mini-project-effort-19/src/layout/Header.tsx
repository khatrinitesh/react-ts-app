import React from 'react'
import { navlinkdata } from '../constants/navlinkdata'
import { NavLink } from 'react-router-dom'

const Header:React.FC = () => {
  return (
    <header className='header bg-black'>
      <div className="container mx-auto">
        <ul className='flex'>
            {navlinkdata.map((val,index) => (
                <li key={index}>
                    <NavLink className={({ isActive }) =>  `text-white p-2 block ${isActive ? 'bg-red-700' : ''}`} to={val.navpath}>{val.navlabel}</NavLink>
                </li>
            ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
