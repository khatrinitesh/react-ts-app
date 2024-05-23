import React, { useState, useEffect } from 'react';

const CustomApp = () => {
  return (
    <>
      <ScrollIndicator/>
    </>
  )
}

export default CustomApp


const ScrollIndicator: React.FC = () => {
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        setScrollPercentage(scrollPercentage);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#f0f0f0',
          zIndex: 9999,
          height: '5px',
        }}
      >
        <div
          style={{
            width: `${scrollPercentage}%`,
            height: '100%',
            backgroundColor: '#007bff',
          }}
        ></div>
      </div>
    );
  };


