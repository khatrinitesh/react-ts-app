import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='p-2 bg-black'>
        <div className="container mx-auto">
        <ul className='flex'>
            <li>
                <NavLink to="/" className="p-2 block text-white" activeclassname="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="p-2 block text-white" activeclassname="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/service" className="p-2 block text-white" activeclassname="active">Service</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="p-2 block text-white" activeclassname="active">Contact</NavLink>
            </li>
        </ul>
        </div>
    </header>
  )
}

export default Header