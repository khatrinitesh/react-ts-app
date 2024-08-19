import React from "react";
import { HeaderData } from "../constants/constants";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header bg-black">
      <div className="container mx-auto">
        <ul className="flex">
          {HeaderData.map((data, index) => (
            <li key={index}>
              <NavLink
                to={data.url}
                className="text-white font-bold p-2 block
            "
              >
                {data.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
