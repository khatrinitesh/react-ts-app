import React from 'react';
import { SidebarProps } from '../types';
import { NavLinks } from '../constants/navLinks';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
      <div className={`fixed inset-0 bg-black bg-opacity-75 z-40  duration-300 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        
        <div className="relative w-full h-full bg-[rgba(0,0,0,.5)] text-white">
        <button
            className="absolute top-4 right-4 text-white"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="flex justify-center h-screen flex-col items-center p-10">
            {NavLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `duration-200 hover:scale-110 text-white py-2 px-4 block w-full text-center ${isActive ? 'bg-red-500' : ''}`
                }
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Sidebar;
