import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../constants/Constants';

interface MenuItem {
  id: number;
  href: string;
  label: string;
}

const Nav: React.FC = () => {
  return (
    <ul className="flex items-center">
      {/* Map over the menuItems array to render each item */}
      {menuItems.map((item: MenuItem) => (
        <li key={item.id} className="group relative mr-6 mb-1">
          <div className="absolute left-0 bottom-0 z-20 h-0 w-full opacity-75 transition-all group-hover:h-2 group-hover:bg-red"></div>
          <NavLink
            to={item.href}
            activeClassName="active" // Use activeClassName prop for active class
            className="relative z-30 block px-2 font-body text-lg font-medium dark:text-primary text-primary transition-colors group-hover:text-green dark:text-white dark:group-hover:text-secondary"
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
