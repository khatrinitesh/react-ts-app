import React, { useState } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <GlowingText />
    </>
  );
};

export default CustomApp;

const GlowingText: React.FC = () => {
  return (
    <>
      <div className="glow">
        <span className="major">COOL</span>
        <span className="minor">SUBTITLE</span>
      </div>
    </>
  );
};
