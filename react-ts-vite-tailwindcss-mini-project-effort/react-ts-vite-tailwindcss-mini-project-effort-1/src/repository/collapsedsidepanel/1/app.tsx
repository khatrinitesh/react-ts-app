import React, { useState } from "react";

const CustomApp = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default CustomApp;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <button onClick={toggleCollapsed}>Toggle</button>
        <nav className="flex flex-col items-center bg-gray-800 text-white w-64 py-4">
          <a href="#" className="p-4">
            Link 1
          </a>
          <a href="#" className="p-4">
            Link 2
          </a>
          {/* Add more links */}
        </nav>
      </div>
    </>
  );
};
