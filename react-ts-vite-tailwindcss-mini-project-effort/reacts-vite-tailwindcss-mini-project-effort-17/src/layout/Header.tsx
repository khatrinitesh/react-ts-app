import React, { useState } from "react";
import { headerData } from "../constants/navLinkData";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo1 from "../../public/images/logo1.png"
import Logo2 from "../../public/images/logo2.jpg";
import Hamburger  from "hamburger-react";

const Header: React.FC = () => {
    const location = useLocation();
    const imgLogo = location.pathname === "/" ? `${Logo1}` : `${Logo2}`
     // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

     // Function to determine if a link is active
     const getLinkClass = (url: string) => {
        return location.pathname === url
            ? 'bg-red-500 text-white' // Active link style (you can customize this)
            : 'text-white'; // Default link style
     }
  return (
    <header className="bg-black header">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={imgLogo} alt="Logo" className="img-fluid max-w-24" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4"> 
          {headerData.map((val, index) => (
            <li key={index}>
              <NavLink className={`p-2 block ${getLinkClass(val.url)}`} to={val.url}>
                {val.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button */}
        <div className="block md:hidden relative z-[999]">
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} color="#ffffff" />
        </div>


        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 w-64 bg-black text-white p-4 md:hidden transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="space-y-4 mt-16">
            {headerData.map((val, index) => (
              <li key={index}>
                <NavLink
                  className={`block p-2 ${getLinkClass(val.url)}`}
                  to={val.url}
                  onClick={() => setIsMenuOpen(false)} // Close menu on item click
                >
                  {val.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
