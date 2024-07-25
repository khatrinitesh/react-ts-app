import React from 'react'
import {  NavLink } from 'react-router-dom'
import { headerItems } from '../constants/constants'

const Header = () => {
  return (
    <header className='header bg-black'>
        <ul className='flex'>
            {headerItems.map((item, index) => (
                <li key={index}>
                    <NavLink className='text-white font-bold block p-2' to={item.href}>{item.label}</NavLink>
                </li>
            ))}
        </ul>
    </header>
  )
}

export default Header