import React from "react";
import { TopNav } from "../interface";
import { NavLink } from "react-router-dom";
import { topnavData } from "../constants/topNav";

const Header: React.FC<TopNav> = ({ title, url }) => {
  return (
    <header class="header py-[10px] bg-black">
      <div className="container mx-auto">
        <ul className="flex">
          {topnavData.map((val, index) => (
            <li key={index}>
              <NavLink
                to={val.url}
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-red-500 block p-[10px]"
                    : "text-white block p-[10px]"
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
