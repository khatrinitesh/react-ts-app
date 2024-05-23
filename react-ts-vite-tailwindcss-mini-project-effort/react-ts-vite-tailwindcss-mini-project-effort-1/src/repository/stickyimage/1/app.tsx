import React, { useState, useEffect } from "react";

const CustomApp = () => {
  return (
    <>
      <h1>Main Content</h1>
      <p>This is the main content of the page.</p>
      <StickyImage src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" height="200px" />
      {/* Additional content can be placed here */}
    </>
  )
}

export default CustomApp

// Define interface for image data
interface ImageData {
    src: string;
    height: string;
    cover:string;
}

  const StickyImage: React.FC<ImageData> = ({ src, cover,height }) => {
    // State to manage whether the image is sticky
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
        <img
          src={src}
          alt="Sticky Image"
          style={{
            position: isSticky ? "fixed" : "static",
            top: 0,
            left: 0,
            width: "100%",
            height,
            objectFit: "cover",
            zIndex: 1000 // Ensure the image is above other content
          }}
        />
      </div>
    );
  };

