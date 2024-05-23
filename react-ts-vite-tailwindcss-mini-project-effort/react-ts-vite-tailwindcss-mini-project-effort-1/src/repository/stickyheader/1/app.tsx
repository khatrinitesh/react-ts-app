import React, { useState, useEffect } from "react";

const CustomApp = () => {
  return (
    <div>
        <StickyHeader height="100px"/>
    </div>
  )
}

export default CustomApp

// Define interface for header data
interface HeaderData {
    height: string;
  }

  const StickyHeader: React.FC<HeaderData> = ({ height, children }) => {
    // State to manage whether the header is sticky
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
        <header
          style={{
            position: isSticky ? "fixed" : "static",
            top: 0,
            left: 0,
            width: "100%",
            height,
            background: "lightblue",
            zIndex: 1000 // Ensure the header is above other content
          }}
        >
          {/* Header content */}
          <h1 style={{ margin: 0, padding: "10px" }}>Sticky Header</h1>
        </header>
        <div style={{ paddingTop: isSticky ? height : "0" }}>
          {/* Your main content goes here */}
          {children}
        </div>
      </div>
    );
  };

