import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
    const [isFullscreenVideoOpen, setIsFullscreenVideoOpen] = useState(false);

    const openFullscreenVideo = () => {
      setIsFullscreenVideoOpen(true);
    };
  
    const closeFullscreenVideo = () => {
      setIsFullscreenVideoOpen(false);
    };
  return (
    <>
      <h1>My Video Player</h1>
      <button onClick={openFullscreenVideo}>Open Fullscreen Video</button>
      {isFullscreenVideoOpen && <FullScreenVideo onClose={closeFullscreenVideo} />}
    </>
  );
};

export default CustomApp;

const FullScreenVideo: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  return (
    <>
      <div className={`fullscreen-video ${isFullscreen ? "fullscreen" : ""}`}>
        <video controls>
          <source src="https://media.istockphoto.com/id/1302330776/video/golden-confetti-stars-falling-on-the-green-screen-background-with-an-alpha-channel.mp4?s=mp4-640x640-is&k=20&c=I0pGmf6ZJTleT63F2g6zP59rIE61fQ-CenPYsx7sQUw=" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <button className="fullscreen-btn" onClick={toggleFullscreen}>
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
    </>
  );
};


