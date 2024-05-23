import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <SideMenu/>
    </>
  )
}

export default CustomApp

const SideMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
  
    return (
      <div className={`main ${isMenuOpen ? 'resize' : ''}`}>
        <div
          id="sideMenu"
          className={`side-menu ${
            isMenuOpen ? 'resize' : ''
          } bg-primaryColor border-r-2 border-primaryColor dark:bg-darkNavBg transform transition-all duration-500 ease-in-out`}
        >
          <div className="mobile-search">
            <form className="search-form">
              <input
                autoComplete="off"
                className="search-input"
                placeholder="Search"
                type="search"
              />
              <button className="search-action" type="submit"></button>
            </form>
          </div>
  
          <div className="menu-items">
            <a href="#" className="item">
              Home
            </a>
            <a href="#" className="item">
              Dashboard
            </a>
            <a href="#" className="item">
              Porject
            </a>
            <a href="#" className="item">
              Earning
            </a>
            <a href="#" className="item">
              Report
            </a>
            <a href="#" className="item">
              Services
            </a>
            <a href="#" className="item active">
              About
            </a>
            <a href="#" className="item">
              Help
            </a>
            <a href="#" className="item">
              contact
            </a>
          </div>
        </div>
  
        <div className="content">
          {/* Your content here */}
        </div>
  
        <div className="nav-bar">
          <div
            id="menuToggle"
            className={`toggle-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    );
};