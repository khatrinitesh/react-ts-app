import React, { useState, useEffect } from 'react';

const WindowWidthComponent: React.FC = () => {
  // Initialize state with current window width
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight,setWindowHeight] = useState<number>(window.innerHeight);

  // Update windowWidth state on window resize
  useEffect(() => {
    const handleWResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window)
    };
    const handleHResize = () => {
        setWindowHeight(window.innerHeight)
    }

    // Add event listener for resize
    window.addEventListener('resize', handleWResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWResize);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleHResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleHResize);
    };
  }, []); // Empty dependency array to only run this effect once when the component mounts

  return (
    <div>
      <h1>Current Window Width: {windowWidth}px X {windowHeight}px</h1>
    </div>
  );
};

export default WindowWidthComponent;
