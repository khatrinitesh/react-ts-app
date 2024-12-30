import React from 'react';
import { TabProps } from '../interface';
import { useTabStore } from '../store/usetabStore';

const Tab:React.FC<TabProps> = ({label,id,children}) => {

    const {activeTab,setActiveTab} = useTabStore();
  return (
    <>
       <button
        className={`tab-header ${activeTab === id ? 'active' : ''}`}
        onClick={() => setActiveTab(id)} // Set the active tab when clicked
      >
        {label}
      </button>

       {/* Tab Content */}
       {activeTab === id && <div className="tab-content">{children}</div>}
    </>
  );
}


const Tabs: React.FC = ({ children }) => {
    return <div className="tabs-container">{children}</div>;
  };

export {Tabs,Tab};
