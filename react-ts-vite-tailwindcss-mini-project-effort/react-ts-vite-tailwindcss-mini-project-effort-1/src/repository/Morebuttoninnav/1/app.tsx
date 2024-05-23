import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
  return (
    <>
      <Nav/>
    </>
  );
};

export default CustomApp;

const Nav: React.FC = () => {
    const initialNavItems: NavItem[] = [
      { id: 1, label: 'Home' },
      { id: 2, label: 'About' },
      { id: 3, label: 'Services' },
      { id: 4, label: 'Contact' },
    ];
  
    const [navItems, setNavItems] = useState<NavItem[]>(initialNavItems);
    const [hiddenNavItems, setHiddenNavItems] = useState<NavItem[]>([]);
  
    const maxVisibleItems = 3; // Maximum number of visible items in the navigation bar
  
    const handleMoreClick = () => {
      setHiddenNavItems(navItems.slice(maxVisibleItems));
      setNavItems(navItems.slice(0, maxVisibleItems));
    };
  
    return (
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
          {hiddenNavItems.length > 0 && (
            <li>
              <button onClick={handleMoreClick}>More</button>
              <ul className="dropdown">
                {hiddenNavItems.map((item) => (
                  <li key={item.id}>{item.label}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </nav>
    );
  };
