import React, { useState } from "react";
// import './style.css';

const CustomApp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');
    const [selectedAltText, setSelectedAltText] = useState('');
  
    const openModal = (imageUrl: string, altText: string) => {
      setSelectedImageUrl(imageUrl);
      setSelectedAltText(altText);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <>
    <div>
     <h1>React Modal Example</h1>
      <div className="image-container">
        <img
          src="https://w0.peakpx.com/wallpaper/390/568/HD-wallpaper-artificial-intelligence-background-vectors-stock-psd-vision.jpg"
          alt="Image 1"
          onClick={() => openModal('image1.jpg', 'Image 1')}
        />
        <img
          src="https://wallpapers.com/images/hd/ai-pictures-1600-x-1000-c36z6q37atec2wyf.jpg"
          alt="Image 2"
          onClick={() => openModal('image2.jpg', 'Image 2')}
        />
        {/* Add more images as needed */}
      </div>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          imageUrl={selectedImageUrl}
          altText={selectedAltText}
        />
      )}
    </div>
      
    </>
  );
};

export default CustomApp;

interface ModalProps {
    onClose: () => void;
    imageUrl: string;
    altText: string;
  }

const Modal: React.FC<ModalProps> = ({ onClose, imageUrl, altText }) => {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <img src={imageUrl} alt={altText} />
          </div>
        </div>
      </div>
    );
  };