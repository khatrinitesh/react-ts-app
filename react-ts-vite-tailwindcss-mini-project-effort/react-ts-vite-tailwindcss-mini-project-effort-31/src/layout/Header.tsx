import React from "react";
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
  return (
    <header className="header bg-black py-[10px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logoBlock">
          {
            isHomePage ? 
            (
                <>
                <Link to="/">
                <img
                src="img/logo1.jpg"
                className="img-fluid imgLogo h-[80px] w-[80px] object-cover"/>
                </Link>
                </>
            )
            :
            (
                <>
                 <Link to="/">
                <img
                src="img/logo2.png"
                className="img-fluid imgLogo h-[80px] w-[80px] object-cover"/>
              </Link>
              </>
            )
          }
        </div>
        <ul className="flex gap-[10px]">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-[18px] block p-[10px] bg-red-500"
                  : "text-white font-bold text-[18px] block p-[10px] block p-[10px]"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-[18px] block p-[10px] bg-red-500"
                  : "text-white font-bold text-[18px] block p-[10px] block p-[10px]"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-[18px] block p-[10px] bg-red-500"
                  : "text-white font-bold text-[18px] block p-[10px] block p-[10px]"
              }
              to="/service"
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-[18px] block p-[10px] bg-red-500"
                  : "text-white font-bold text-[18px] block p-[10px]"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
