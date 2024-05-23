import React, { useEffect, useState } from "react";
// import './style.css';

const CustomApp: React.FC = () => {
  return (
    <>
      <Tabbed />
    </>
  );
};

export default CustomApp;

const Tabbed: React.FC = () => {
  const [activeTab, setActivetab] = useState(0);

  const handleClick = (index: number) => {
    setActivetab(index);
  };
  return (
    <>
      <div className="tabs">
        <button
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleClick(0)}
        >
          tab1
        </button>
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          tab2
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          tab3
        </button>
      </div>
      <div className="tabContent">
        {activeTab === 0 && <div>Content Tab 1</div>}
        {activeTab === 1 && <div>Content Tab 2</div>}
        {activeTab === 2 && <div>Content Tab 3</div>}
      </div>
    </>
  );
};
