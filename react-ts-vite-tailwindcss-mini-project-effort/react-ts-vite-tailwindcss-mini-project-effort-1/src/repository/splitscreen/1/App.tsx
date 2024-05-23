import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <div>
      <SplitScreen/>
    </div>
  )
}

export default CustomApp

const SplitScreen = () => {
  return (
    <div className="split-screen">
      <div className="left-pane">
        {/* Content for the left pane */}
      </div>
      <div className="right-pane">
        {/* Content for the right pane */}
      </div>
    </div>
  );
};