import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <MobileMenu />
    </>
  );
};

export default CustomApp;

const MAD: React.FC = () => {
  return <>Mobile app development</>;
};

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="mobile-menu">
        <button className="menu-icon" onClick={toggleMenu}>
          Menu
        </button>
        {isOpen && (
          <div className="menu-items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
