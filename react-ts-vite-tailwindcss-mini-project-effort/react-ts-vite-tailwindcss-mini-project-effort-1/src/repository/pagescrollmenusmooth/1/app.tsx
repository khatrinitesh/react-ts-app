import React, { useState, useEffect } from "react";
import "./style.css";
import ScrollMenu from "./scrollmenu";

const CustomApp: React.FC = () => {

  return (
    <div className="flex flex-col">
      <ScrollMenu />
    </div>
  );
};

export default CustomApp;
