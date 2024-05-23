import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <FlipImage imageUrl="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
    </>
  );
};

export default CustomApp;

const FlipImage: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {

    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        // Perform any side effect here when 'flipped' state changes
        // For example, you can apply a CSS class to flip the image based on 'flipped' state
        // You can also perform cleanup here if needed
        return () => {
          // Cleanup function if needed
        };
      }, [flipped]); // Depend on 'flipped' state variable

    const handleFlip = () => {
        setFlipped(!flipped); // Toggle the 'flipped' state
      };
  return (
    <div className="image-container">
      <img src={imageUrl} alt="Flipped Image" className="flippable-image" onClick={handleFlip} /> {/*Flip the image when clicked */}
    </div>
  );
};
