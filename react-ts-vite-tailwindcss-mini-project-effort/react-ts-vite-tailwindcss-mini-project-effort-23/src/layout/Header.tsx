import React from "react";
import { navdata } from "../constants/NAVDATA";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <ul className="flex">
          {navdata.map((val, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                    isActive
                    ? "bg-red-500 text-white block p-2"
                    : "inactive text-white block p-2"
                }
                to={val.urlname}
              >
                {val.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
