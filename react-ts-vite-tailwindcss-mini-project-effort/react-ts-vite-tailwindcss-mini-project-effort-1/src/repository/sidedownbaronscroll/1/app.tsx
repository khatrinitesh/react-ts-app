import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <Sidebar />
    </>
  );
};

export default CustomApp;

const Sidebar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log("Scroll Top:", scrollTop);
        setIsScrolled(scrollTop > 100); // Set isScrolled to true if scrollTop is greater than 100
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  return (
    <div className={`sidebar ${isScrolled ? "scrolled" : ""}`}>
      {/* Sidebar content */}
      <p></p>
    </div>
  );
};
