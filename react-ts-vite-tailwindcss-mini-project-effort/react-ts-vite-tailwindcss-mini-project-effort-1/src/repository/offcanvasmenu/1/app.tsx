import React,{useState } from "react";
import './style.css';

const CustomApp = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
  return (
    <>
    <button onClick={toggleMenu}>Toggle menu</button>
    <OffCanvas isOpen={menuOpen} onClose={toggleMenu} />
    </>
  );
};

export default CustomApp;

interface OffCanvasProps {
  isOpen: boolean;
  onClose: () => void;
}

const OffCanvas: React.FC<OffCanvasProps> = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className={`off-canvas-menu ${isOpen ? "open" : ""}`}>
        <div className="overlay" onClick={handleClose}></div>
        <div className="menu">
          <button onClick={handleClose}>Close</button>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      </div>
    </>
  );
};
