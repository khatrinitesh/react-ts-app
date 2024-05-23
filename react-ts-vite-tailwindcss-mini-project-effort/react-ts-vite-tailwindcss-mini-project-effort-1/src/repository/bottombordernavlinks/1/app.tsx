import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

const CustomApp = () => {
  return (
    <>
        <NavBar/>
    </>
  )
}

export default CustomApp

const NavBar: React.FC = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <NavLink to="/"  activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };