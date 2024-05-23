import React, { useState } from "react";

const CustomApp = () => {
  return (
    <div>
      <Collapsible/>
    </div>
  )
}

export default CustomApp

const Collapsible: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleCollapse}
        >
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
        {!isCollapsed && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            {/* Content to be displayed when expanded */}
            <p>This is the collapsible content.</p>
          </div>
        )}
      </div>
    );
  };


