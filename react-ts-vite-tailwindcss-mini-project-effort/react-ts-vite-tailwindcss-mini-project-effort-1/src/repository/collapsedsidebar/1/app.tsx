import React, { useState } from "react";

const CustomApp = () => {
  return <div>
    <Sidebar/>
  </div>;
};

export default CustomApp;

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <div
        className={`flex flex-col h-screen w-64 bg-gray-800 ${
          isCollapsed ? "hidden" : ""
        }`}
      >
        <button className="p-3 text-white" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        <div className="flex-1">{/* Your sidebar content goes here */}</div>
      </div>
    </>
  );
};
