import React from "react";
import { HeaderNavData } from "./../constants/navData";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <ul className="flex">
          {HeaderNavData.map((val, index) => (
            <li key={index}>
              <NavLink
                to={val.url}
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-600 text-white block p-2"
                    : "inactive text-white block p-2"
                }
              >
                {val.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
