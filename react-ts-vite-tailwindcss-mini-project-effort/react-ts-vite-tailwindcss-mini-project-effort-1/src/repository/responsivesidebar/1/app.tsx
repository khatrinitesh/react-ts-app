import React from 'react'

const CustomApp = () => {
  return (
    <div>
      <Sidebar/>
    </div>
  )
}

export default CustomApp

interface SidebarProps {
    isOpen: boolean; // Indicates whether the sidebar is open or closed
    onClose: () => void; // Function to close the sidebar
  }
  const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
      <div className={`z-[999] fixed top-0 left-0 h-full w-64 bg-gray-800 text-white  transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold">Sidebar</h2>
          <button onClick={onClose} className="text-white focus:outline-none focus:bg-gray-700 px-2 py-1 rounded-md">
            Close
          </button>
        </div>
        <nav className="p-4">
          <ul>
            <li>
              <a href="#" className="block py-2 hover:bg-gray-700">Item 1</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-gray-700">Item 2</a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:bg-gray-700">Item 3</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
