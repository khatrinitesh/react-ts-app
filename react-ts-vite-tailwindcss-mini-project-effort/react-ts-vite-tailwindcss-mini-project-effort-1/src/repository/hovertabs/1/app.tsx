import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp: React.FC = () => {

  return (
    <>
      <HoverTabs/>
    </>
  );
};

export default CustomApp;

const HoverTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);
  
    return (
      <div className="hover-tabs">
        <div
          className={activeTab === 1 ? 'tab active' : 'tab'}
          onMouseEnter={() => setActiveTab(1)}
        >
          Tab 1
        </div>
        <div
          className={activeTab === 2 ? 'tab active' : 'tab'}
          onMouseEnter={() => setActiveTab(2)}
        >
          Tab 2
        </div>
        <div
          className={activeTab === 3 ? 'tab active' : 'tab'}
          onMouseEnter={() => setActiveTab(3)}
        >
          Tab 3
        </div>
      </div>
    );
  };