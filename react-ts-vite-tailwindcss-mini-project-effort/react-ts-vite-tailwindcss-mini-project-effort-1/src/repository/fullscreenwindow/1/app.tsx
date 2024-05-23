import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
    
  return (
    <>
      <FullscreenWindow/>
    </>
  );
};

export default CustomApp;

const FullscreenWindow: React.FC = () => {
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  
    const toggleFullscreen = () => {
      if (!isFullscreen) {
        enterFullscreen();
      } else {
        exitFullscreen();
      }
    };
  
    const enterFullscreen = () => {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
      }
      setIsFullscreen(true);
    };
  
    const exitFullscreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    };
  
    return (
      <div>
        <h1>Fullscreen Window</h1>
        <button onClick={toggleFullscreen}>
          {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
        <div style={{ width: '100vw', height: '100vh', background: 'lightblue' }}>
          {/* Content to display in fullscreen */}
        </div>
      </div>
    );
  };