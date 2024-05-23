import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
     <ImgOverlay imageUrl="https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg"/>
    </>
  )
};

export default CustomApp;

interface ImageOverlayProps {
  imageUrl: string;
}

const ImgOverlay: React.FC<ImageOverlayProps> = ({ imageUrl }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });


//   zoom in
  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };



  //   zoom out
  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  //  mouse move

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setPosition({ x: offsetX, y: offsetY });
  };
  return (
    <>
      <div className="image-overlay" onMouseMove={handleMouseMove}>
        <div
          className="image-container"
          style={{
            width: '500px',
            height: '300px',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: `${zoomLevel * 100}%`,
            backgroundPosition: `${position.x}px ${position.y}px`,
          }}
        ></div>
        <div className="controls">
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      </div>
    </>
  );
};
