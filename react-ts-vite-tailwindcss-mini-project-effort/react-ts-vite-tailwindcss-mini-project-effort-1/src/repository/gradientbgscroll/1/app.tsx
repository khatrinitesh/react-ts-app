import React, { useState,useEffect  } from 'react';
import './style.css';

const CustomApp:React.FC = () => {
  return (
    <>
        <ScrollingGradientBackground/>
    </>
  )
}

export default CustomApp

const ScrollingGradientBackground: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Calculate gradient colors based on scroll position
    const calculateGradient = () => {
      const percentage = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const color1 = `hsl(${percentage * 2.55}, 100%, 50%)`; // Start color (hue changes based on scroll)
      const color2 = `hsl(${(percentage + 120) * 2.55}, 100%, 50%)`; // End color (hue shifted by 120 degrees)
      return `linear-gradient(to bottom, ${color1}, ${color2})`;
    };
  
    return (
      <div className="scrolling-gradient-background" style={{ background: calculateGradient() }}>
        {/* Content of your application */}
        <div style={{ height: '2000px' }}>Scroll Down to See the Effect</div>
      </div>
    );
  };
  