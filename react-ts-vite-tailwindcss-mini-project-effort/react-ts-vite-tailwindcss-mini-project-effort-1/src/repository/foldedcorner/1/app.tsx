import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <FoldedCorner />
    </>
  );
};

export default CustomApp;

const FoldedCorner: React.FC = () => {
    return (
      <div className="folded-corner">
        <div className="content">
          <h1>Hello, world!</h1>
          <p>This is a folded corner effect created using CSS.</p>
        </div>
        <div className="corner"></div>
      </div>
    );
  };