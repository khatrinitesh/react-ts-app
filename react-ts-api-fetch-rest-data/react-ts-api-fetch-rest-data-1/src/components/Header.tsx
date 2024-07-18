import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { headerData } from '../constants/constants'

const Header = () => {
  return (
    <header className='bg-black header'>
      <div className="container mx-auto">
      <ul className='flex listNav'>
        {headerData.map((item) => (
          <li key={item.link}>
            <NavLink activeclassname="active" to={item.link} className='capitalize font-bold text-white block p-2'>{item.label}</NavLink>
          </li>
        ))}
      </ul>
      </div>
  </header>
  )
}

export default Header