import React, { useState, useEffect } from "react";

const CustomApp = () => {
  return (
    <div>
        <StickyNavbar/>
    </div>
  )
}

export default CustomApp

// Define interface for navbar data
interface NavbarData {
    height: string;
  }

  const StickyNavbar: React.FC<NavbarData> = ({ height, children }) => {
    // State to manage whether the navbar is sticky
    const [isSticky, setIsSticky] = useState<boolean>(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsSticky(scrollTop > parseInt(height));
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [height]);
  
    return (
      <div style={{ position: "relative" }}>
        <div style={{ height: isSticky ? height : "0" }} />
        <nav
          style={{
            position: isSticky ? "fixed" : "static",
            top: 0,
            left: 0,
            width: "100%",
            height,
            background: "lightblue",
            zIndex: 1000 // Ensure the navbar is above other content
          }}
        >
          {/* Navbar content */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {React.Children.map(children, (child, index) => (
              <li key={index} style={{ display: "inline-block", marginRight: "10px" }}>
                {child}
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ paddingTop: isSticky ? height : "0" }}>
          {/* Your main content goes here */}
        </div>
      </div>
    );
  };