import React, { useState, useEffect } from "react";

const CustomApp = () => {
  return (
    <div style={{ height: "1000px" }}>
        <h1>Sticky Element Example</h1>
        <StickyElement id="sticky-element" topOffset={50}>
        <div style={{ padding: "20px", background: "lightblue" }}>
            I'm a sticky element!
        </div>
        </StickyElement>
    </div>
  )
}

export default CustomApp

// Define interface for sticky element data
interface StickyElementData {
    id: string;
    topOffset: number;
  }

  const StickyElement: React.FC<StickyElementData> = ({ id, topOffset, children }) => {
    // State to manage whether the element is sticky
    const [isSticky, setIsSticky] = useState<boolean>(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById(id);
        if (!element) return;
  
        const { top } = element.getBoundingClientRect();
        setIsSticky(top <= topOffset);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [id, topOffset]);
  
    return (
      <div style={{ position: isSticky ? "fixed" : "static", top: topOffset }}>
        {children}
      </div>
    );
  };