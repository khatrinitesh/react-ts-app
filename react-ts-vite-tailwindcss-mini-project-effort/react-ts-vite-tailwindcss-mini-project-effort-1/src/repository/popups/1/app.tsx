import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
    const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <button className="open-btn" onClick={togglePopup}>Open Popup</button>
      {showPopup && <Popup onClose={togglePopup} />}
        
    </>
  )
};

export default CustomApp;

interface PopupProps {
    onClose: () => void;
  }

  const Popup: React.FC<PopupProps> = ({ onClose }) => {
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-btn" onClick={onClose}>Close</button>
          <h2>This is a Popup</h2>
          <p>You can put any content here...</p>
        </div>
      </div>
    );
  };