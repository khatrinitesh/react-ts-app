import React from "react";
import { Link } from "react-router-dom";

// Components
import Nav from "./Nav";
import Sidebar from "./Sidebar";

// Images
import Logo from "../assets/img/logo.svg";

// Constants
import { menuSidebar } from "../constants/Constants";

interface HeaderProps {
  // Define any props if needed in the future
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <header className="relative z-[9]">
        <div className="flex items-center justify-between py-6 lg:py-10">
          <Link to="/" className="flex items-center me-2">
            <img src={Logo} alt="logo" className="sm:me-6" />
            <p className="hidden font-poppinsSB text-2xl font-bold text-secondary dark:text-white lg:block">
              John Doe
            </p>
          </Link>
          <div className="flex items-center lg:hidden">
            <Sidebar />
          </div>
          <div className="hidden lg:block">
            <Nav menuSidebar={menuSidebar} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
