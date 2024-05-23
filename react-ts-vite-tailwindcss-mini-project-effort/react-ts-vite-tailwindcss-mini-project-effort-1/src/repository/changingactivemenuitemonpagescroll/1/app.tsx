import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CustomApp = () => {
  return (
    <>
    <Menu/>
    </>
  )
};

export default CustomApp;

const Menu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home-section");
      const aboutSection = document.getElementById("about-section");
      const contactSection = document.getElementById("contact-section");

      const scrollPosition = window.scrollY;

      if (
        homeSection &&
        aboutSection &&
        contactSection &&
        scrollPosition < aboutSection.offsetTop
      ) {
        setActiveItem("home");
      } else if (
        aboutSection &&
        contactSection &&
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < contactSection.offsetTop
      ) {
        setActiveItem("about");
      }
      else if(contactSection && scrollPosition >= contactSection.offsetTop){
        setActiveItem("contact");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <>
    <div className="menu">
      <ul>
        <li >
            <Link to="/" className={activeItem === 'home' ? 'active' : ''}>Home</Link>
        </li>
        <li >
            <Link to="/about" className={activeItem === 'about' ? 'active' : ''}>About</Link>
        </li>
        <li >
            <Link to="/contact" className={activeItem === 'contact' ? 'active' : ''}>Contact</Link>
        </li>
      </ul>
    </div>
    </>
  )
};
