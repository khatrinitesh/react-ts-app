import React, { useEffect, useState } from "react";
import { NavData } from "../constants/navData";
import { Link, NavLink, useLocation } from "react-router-dom";
import  Hamburger  from "hamburger-react"; // Import the Hamburger component
import Logo1 from "../../public/images/logo1.png"
import Logo2 from "../../public/images/logo2.jpg"


const Header: React.FC = () => {
     // State to handle the menu visibility
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

   // Determine logo based on the current path
   const getLogoSrc = () => {
    switch (location.pathname) {
      case "/":
        return `${Logo1}`;
      case "/about":
      case "/service":
      case "/contact":
        return `${Logo2}`;
      default:
        return `${Logo1}`; // Default logo
    }
  };

    // Handle body overflow based on menu state
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'; // Prevent body scrolling
        } else {
          document.body.style.overflow = ''; // Allow body scrolling
        }
    
        // Cleanup function to remove overflow style on component unmount
        return () => {
          document.body.style.overflow = '';
        };
      }, [isOpen]);
  return (
    <header className="header bg-black py-1">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
         <img src={getLogoSrc()} alt="" className="max-w-20" />
        </Link>
        {/* Hamburger menu button (visible only on mobile) */}
        <div className="block z-[999] md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </div>
        
         {/* Full-screen overlay menu for mobile devices */}
         <div className={`fixed md:relative inset-0 items-center  justify-center md:bg-transparent bg-black bg-opacity-50 duration-500 delay-500 flex md:flex-row md:items-start  z-50 ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row items-center">
            {NavData.map((val, index) => (
              <li key={index} className="md:mb-0 mb-4">
                <NavLink
                  to={val.url}
                  className={({ isActive }) =>
                    `text-white text-xl px-6 py-2 rounded-[5px] block transition-all duration-200 ${
                      isActive ? "bg-gray-700" : "hover:bg-gray-600"
                    }`
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
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
