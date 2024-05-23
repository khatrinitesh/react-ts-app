import React, { useState,useEffect  } from "react";
// import "./style.css";

const CustomApp = () => {
    const [overlayVisible, setOverlayVisible] = useState<boolean>(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };
    
  
  return (
    <>
      <button onClick={toggleOverlay}>Toggle overlay</button>
      <OverlayEffect onClick={toggleOverlay} show={overlayVisible} />
    </>
  );
};

export default CustomApp;

interface OverlayProps{
    show:boolean;
    onClick?:() => void;
    className?:string;
}

const OverlayEffect:React.FC<OutlineBtnProps> = ({show,onClick,className}) => {
    return(
        <>
         {show && (
            <div className={`overlay ${className ? className : ''}`} onClick={onClick}  style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
                zIndex: 9999, // Ensure the overlay appears on top of other elements
            }}></div>
         )}
        </>
    )
}