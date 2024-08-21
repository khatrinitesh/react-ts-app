import React from "react";
import { HeaderData } from "../constants/constants";
import { Link, NavLink, useLocation } from "react-router-dom";


const Header:React.FC = () => {
  // const ImageLogo = import.meta.env.VITE_ASSETS
  const location = useLocation();
  const pathname = location.pathname;

  // determine logo based on pathname
  let logo;
  if(pathname === '/'){
    logo = "/images/logo1.png";
  }
  else{
    logo = '/images/logo2.jpg';
  }
  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
          <Link to="/" className="logoBlock">
            <img src={logo} className="max-w-12"/>
          </Link>
          <ul className="flex">
          {HeaderData.map((val, index) => (
            <li key={index}>
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "red" : "",
                    color: isActive ? "white" : "",
                  };
                }}
                className="text-white p-2 block"
                to={val.url}
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
