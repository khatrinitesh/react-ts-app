import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp: React.FC = () => {
  return (
    <>
      <HorizontalScrollMenu />
    </>
  );
};

export default CustomApp;

const HorizontalScrollMenu: React.FC = () => {
    return (
      <div className="horizontal-scroll-menu">
        <div className="menu-container">
          <ul className="menu">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
            <li><a href="#">Item 4</a></li>
            <li><a href="#">Item 5</a></li>
            <li><a href="#">Item 6</a></li>
            <li><a href="#">Item 7</a></li>
            <li><a href="#">Item 8</a></li>
            <li><a href="#">Item 9</a></li>
            <li><a href="#">Item 10</a></li>
          </ul>
        </div>
      </div>
    );
  };