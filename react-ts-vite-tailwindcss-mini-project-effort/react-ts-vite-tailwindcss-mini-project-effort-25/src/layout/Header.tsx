import React from "react";
import { navData } from "../constants/navdata";
import { NavLink, useLocation } from "react-router-dom";

const Header: React.FC = () => {

    const logo1 = '../../public/img/logo1.jpg';
    const logo2 = '../../public/img/logo2.jpeg';

    const location = useLocation();

    const isContactPage = location.pathname === '/contact';

  return (
    <header className="header py-2 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logoBlock">
             {/* Conditionally render logo based on the current route */}
          <img
            src={isContactPage ? logo2 : logo1}
            alt="Logo"
            className="w-120 h-[120px] max-w-full"
          />
        </div>
        <ul className="topnav flex m-0 p-0">
          {navData.map((val, index) => (
            <li key={index}>
              <NavLink className={({ isActive }) => `text-white p-4 ${isActive ? 'bg-red-600' : ''}`} to={val.url}>{val.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
