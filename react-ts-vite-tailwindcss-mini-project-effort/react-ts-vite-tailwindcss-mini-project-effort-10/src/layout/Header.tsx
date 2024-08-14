import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { HEADER_DATA } from "../constants/headerData"; // Adjust path as necessary

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

   // Access the environment variable
   const imageUrl = isHomePage ? `${import.meta.env.VITE_IMAGE_BASE_URL}/logo1.png` : `${import.meta.env.VITE_IMAGE_BASE_URL}/logo2.webp`
  return (
    <>
      <nav className="bg-[#00425a] p-4 navbar">
        <div className="container mx-auto">
          <div className="innerHeader flex justify-between items-center">
            <Link className="logoBlock max-w-10">
              <img src={imageUrl}/>
            </Link>
            <ul className="flex space-x-4 w-full mx-auto justify-end">
              {HEADER_DATA.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.url}
                    className="text-white  p-2 rounded-2xl flex items-center hover:text-gray-400"
                    activeClassName="font-bold"
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
