import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp: React.FC = () => {

  return (
    <>
      <DropdownMenu/>
    </>
  );
};

export default CustomApp;

const DropdownMenu: React.FC = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  
    const handleMouseEnter = () => {
      setIsDropdownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setIsDropdownVisible(false);
    };
  
    return (
      <div className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className="dropdown-toggle">Hover Dropdown</button>
        {isDropdownVisible && (
          <div className="dropdown-content">
            <a href="#">Item 1</a>
            <a href="#">Item 2</a>
            <a href="#">Item 3</a>
          </div>
        )}
      </div>
    );
  };
