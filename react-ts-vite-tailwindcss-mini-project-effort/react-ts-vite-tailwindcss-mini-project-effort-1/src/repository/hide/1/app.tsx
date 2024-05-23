import React, { useState, useEffect } from "react";
// import "./style.css";

const CustomApp: React.FC = () => {
  return (
    <>
      <HideComp/>
    </>
  );
};

export default CustomApp;

const HideComp: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>
      {isVisible && (
        <div>
          <h2>Visible Content</h2>
          <p>This content is visible when the button is clicked.</p>
        </div>
      )}
    </>
  );
};
