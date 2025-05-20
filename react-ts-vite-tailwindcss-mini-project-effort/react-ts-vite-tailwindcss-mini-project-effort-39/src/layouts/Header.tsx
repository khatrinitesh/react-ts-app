import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../constants/constants";

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const logoSrc = isHomePage ? "img/logo1.png" : "img/logo2.png";

  return (
    <header className="header py-[10px] bg-blue-300">
      <div className="container mx-auto">
        <div className="innerHeader flex justify-between items-center">
          <a href="javascript:void(0)" className="logoBlock">
            <img src={logoSrc} alt="" className="w-[3vw]" />
          </a>
          <div className="topNav">
            <ul className="flex gap-[10px]">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <li key={item.id} className={item.className}>
                    <Link
                      to={item.href}
                      className={`px-4 py-2 rounded ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
