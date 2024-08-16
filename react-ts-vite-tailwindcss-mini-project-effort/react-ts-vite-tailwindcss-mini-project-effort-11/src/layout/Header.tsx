import React from 'react'
import { HeaderData } from '../constants/constants'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header bg-black p-2'>
        <div className="container mx-auto">
            <ul className="listBullet flex gap-3">
                {HeaderData.map((item,index) => (
                    <li key={index} className='flex'>
                        <NavLink to={item.pathname} className="flex gap-3 p-2 rounded-[5px]  text-white">
                            <span className="">{item.icon}</span> {item.title} 
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </header>
  )
}

export default Header