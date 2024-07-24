import React from 'react'
import { headerLinks } from '../constants/constants'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header bg-black'>
      <div className="container mx-auto">
        <ul className='flex'>
        {headerLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.href} activeclassname='active' className='text-white p-2 block'>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      </div>
    </header>
  )
}

export default Header