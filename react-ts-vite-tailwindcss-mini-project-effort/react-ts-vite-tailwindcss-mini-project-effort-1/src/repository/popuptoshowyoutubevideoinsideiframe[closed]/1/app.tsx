import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
    const [showPopup,setShowpopup] = useState<boolean>(false)

    const togglePop = () => {
        setShowpopup(!showPopup)
    }
  return (
    <>
      <button onClick={togglePop}>Open Popup</button>
      {showPopup && <PopupAppasdad onClose={togglePop}  />}
        
    </>
  )
};

export default CustomApp;

interface PopupProps {
  onClose: () => void;
}

const PopupAppasdad: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <>
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0VqR9lbZ9VA?si=dGsDG-lJl1TWD8Ni" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
      </div>
    </>
  );
};
