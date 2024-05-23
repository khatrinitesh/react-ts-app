import React, { useState } from "react";

const CustomApp = () => {
    const option = [
        {imageUrl:'https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg'}
    ]

    const imageUrl = option[0].imageUrl
  return (
    <>
    <ImageMagnifier imageUrl={imageUrl}/>
    </>
  )
};

export default CustomApp;

interface ImageMagnifierProps {
    imageUrl: string;
  }
  
  const ImageMagnifier: React.FC<ImageMagnifierProps> = ({ imageUrl }) => {
    const [magPosition, setMagPosition] = useState<{ left: number; top: number }>(
      { left: 0, top: 0 }
    );
    const [showMagnifier, setShowMagnifier] = useState<boolean>(false);
    const [zoomLevel, setZoomLevel] = useState<number>(1);
  
    const handleMouseMove = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      const { left, top, width, height } =
        event.currentTarget.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
  
      const magSize = 150 * zoomLevel; // Adjusted based on zoom level
  
      const magLeft = Math.min(Math.max(x - magSize / 2, 0), width - magSize);
      const magTop = Math.min(Math.max(y - magSize / 2, 0), height - magSize);
  
      setMagPosition({ left: magLeft, top: magTop });
    };
  
    const handleMouseEnter = () => {
      setShowMagnifier(true);
    };
  
    const handleMouseLeave = () => {
      setShowMagnifier(false);
    };
  
    const handleZoomIn = () => {
      setZoomLevel((prevZoomLevel) => Math.min(prevZoomLevel + 0.1, 3)); // Increase zoom level by 0.1, capped at 3
    };
  
    const handleZoomOut = () => {
      setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 0.1, 1)); // Decrease zoom level by 0.1, capped at 1 (original size)
    };
  
    return (
      <>
        <div
          className="image-magnifier"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="image-container">
            <img
              src={imageUrl}
              alt="Magnifier"
              style={{ transform: `scale(${zoomLevel})` }} // Scale the image based on zoom level
            />
            {showMagnifier && (
              <div
                className="magnifier"
                style={{ left: magPosition.left, top: magPosition.top }}
              ></div>
            )}
          </div>
        </div>
        <div className="controls">
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      </>
    );
  };