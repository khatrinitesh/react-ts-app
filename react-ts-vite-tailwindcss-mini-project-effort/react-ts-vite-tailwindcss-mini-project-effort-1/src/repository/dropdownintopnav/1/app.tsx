import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CustomApp = () => {
  return (
    <div>
        <TopNav/>
    </div>
  )
}

export default CustomApp

const TopNav: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <nav className="top-nav">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="dropdown">
            <a onClick={toggleDropdown}>Dropdown</a>
            {isDropdownOpen && <Dropdown />}
          </li>
        </ul>
      </nav>
    );
}

const Dropdown:React.FC  =() => {
    return(
        <>
        <div className="dropdown-content">
      <ul>
        <li>
          <Link href="/dropdown-item1">
            <a>Dropdown Item 1</a>
          </Link>
        </li>
        <li>
          <Link href="/dropdown-item2">
            <a>Dropdown Item 2</a>
          </Link>
        </li>
        <li>
          <Link href="/dropdown-item3">
            <a>Dropdown Item 3</a>
          </Link>
        </li>
      </ul>
    </div>
        </>
    )
}

