import React,{useState} from "react";

const CustomApp = () => {
  return <div>
    <ZoombleImage imgUrl="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"/>
  </div>;
};

export default CustomApp;

const ZoombleImage: React.FC<{imgUrl:string}> = ({ imgUrl }) => {
  const [scale, setScale] = useState<number>(1);

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale + 0.1);
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(0.1, prevScale - 0.1));
  };

  return (
    <>
      <div>
        <h1>Zoomable Image Example</h1>
        <img
          src={imgUrl}
          alt="Zoomable Image"
          style={{ transform: `scale(${scale})` }}
        />
        <div>
          <button onClick={handleZoomIn}>Zoom In</button>
          <button onClick={handleZoomOut}>Zoom Out</button>
        </div>
      </div>
    </>
  );
};
