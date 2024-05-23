import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <ShrinkHeader />
    </>
  );
};

export default CustomApp;

const ShrinkHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop);

      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window]);

  return (
    <>
      <div className={`app ${isScrolled ? "scrolled" : ""}`}>
        <header className={`header ${isScrolled ? "scrolled-header" : ""}`}>
          {/* Header content */}
          <h1>Header</h1>
        </header>
        <div className="content">
          {/* Main content */}
          <h2>Main Content</h2>
          {/* Add more content here */}
        </div>
      </div>
    </>
  );
};
