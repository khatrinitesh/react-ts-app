import React,{useState} from "react";
import './style.css';

const CustomApp = () => {
  return <>
    <Animation/>
  </>;
};

export default CustomApp;

const Animation: React.FC = () => {
  const [isAnimated, setIsanimated] = useState<boolean>(false);

  // handle event
  const handleBtnClick = () => {
    setIsanimated(true);
    // death
    setTimeout(() => setIsanimated(false), 1000); // Animation duration: 1 second
  };
  return (
    <>
      <div className="container">
        <button
          className={`btn ${isAnimated ? "animate" : ""}`}
          onClick={handleBtnClick}
        >
          Click Me
        </button>
      </div>
    </>
  );
};
