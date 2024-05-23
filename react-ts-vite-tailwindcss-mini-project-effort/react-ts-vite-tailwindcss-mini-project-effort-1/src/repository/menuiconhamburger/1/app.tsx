import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <MenuIcon />
    </>
  );
};

export default CustomApp;

const MenuIcon: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h12a1 1 0 100-2H4a1 1 0 100 2zm0 6h12a1 1 0 100-2H4a1 1 0 100 2zm0 6h12a1 1 0 100-2H4a1 1 0 100 2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
              />
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="bg-gray-800 absolute top-0 left-0 w-full">
            {/* Your dropdown menu content goes here */}
            <ul className="text-white p-4">
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  
