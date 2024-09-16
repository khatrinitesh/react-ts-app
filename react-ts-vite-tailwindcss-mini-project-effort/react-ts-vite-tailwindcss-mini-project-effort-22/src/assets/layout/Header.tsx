import React from "react";
import { navData } from "../../constants/navData";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-black">
      <div className="container mx-auto">
        <nav>
          <ul className="flex">
            {navData.map((val, index) => (
              <li key={index}>
                <NavLink className={({isActive}) => isActive ? 'bg-red-500 text-white p-2 block' : 'inactive text-white p-2 block'} to={val.url}>
                  {val.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
