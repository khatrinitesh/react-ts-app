import React from "react";
import './style.css';

const CustomApp = () => {
  return (
    <div className="container">
        <Sidebar/>
        <MainContent/>
    </div>
  )
};

export default CustomApp;

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
    </>
  );
};

const MainContent: React.FC = () => {
  return (
    <>
      <div className="main-content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main content area.</p>
      </div>
    </>
  );
};
