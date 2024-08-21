import React, { useState } from "react";
import { NavLinks } from "../constants/navLinks";
import { Link, NavLink, useLocation } from "react-router-dom";

// Ensure that the environment variables are available
const assetsPath = import.meta.env.VITE_ASSETS;
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  // Determine logo based on the current path
  const getLogoSrc = () => {
    switch (location.pathname) {
      case "/":
        return `${assetsPath}/images/logo1.png`;
      case "/about":
      case "/service":
      case "/contact":
        return `${assetsPath}/images/logo2.jpg`;
      default:
        return `${assetsPath}/images/logo1.png`; // Default logo
    }
  };

  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <div className="innerHeader justify-between flex items-center">
          <Link to="/">
            <img src={getLogoSrc()} className="max-w-20" />
          </Link>
           {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
          {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-white p-2 block ${isActive ? 'bg-red-500' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        </div>
         {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
