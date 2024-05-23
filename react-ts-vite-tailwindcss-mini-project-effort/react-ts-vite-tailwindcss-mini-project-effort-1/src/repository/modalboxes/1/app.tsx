import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <button onClick={openModal}>Open</button>
    {isModalOpen && <ModalBoxes onClose={closeModal}/>}
      
    </>
  );
};

export default CustomApp;

interface ModalProps{
    onClose:() => void;
}


const ModalBoxes: React.FC<ModalProps> = ({onClose }) => {
 
  return (
    <>
     <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Modal Title</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>This is the modal content.</p>
        </div>
      </div>
    </div>
    </>
  );
};
