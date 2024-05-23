import React, { useState } from "react";
// import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faSearch, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";


const CustomApp = () => {
    const items = [
        { title: 'Home', icon: faHome, href: '#' },
        { title: 'Search', icon: faSearch, href: '#' },
        { title: 'Contact', icon: faEnvelope, href: '#' },
        { title: 'Login', icon: faUser, href: '#' },
      ];
  return (
    <>
      <NavbarWithIcons items={items} />
    </>
  );
};

export default CustomApp;
interface NavItem {
    title: string;
    icon: any; // Change this type if FontAwesomeIcon doesn't work
    href: string;
  }

  interface NavbarProps {
    items: NavItem[];
  }

  

  const NavbarWithIcons: React.FC<NavbarProps> = ({ items }) => {
    return (
      <nav className="navbar">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.href}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
