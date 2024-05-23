import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp: React.FC = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default CustomApp;

const Navbar: React.FC = () => {
    const [activeNavItem, setActiveNavItem] = useState('');
  

    useEffect(() => {
        const handleScroll = () => {
          // Find the currently visible section based on scroll position
          const sections = document.querySelectorAll('section');
          let currentSectionId = '';
    
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
              currentSectionId = section.id;
            }
          });
    
          setActiveNavItem(currentSectionId);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className={activeNavItem === "home" ? "active" : ""}>
            <a href="#home">Home</a>
          </li>
          <li className={activeNavItem === "about" ? "active" : ""}>
            <a href="#about">About</a>
          </li>
          <li className={activeNavItem === "services" ? "active" : ""}>
            <a href="#services">Services</a>
          </li>
          <li className={activeNavItem === "contact" ? "active" : ""}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
