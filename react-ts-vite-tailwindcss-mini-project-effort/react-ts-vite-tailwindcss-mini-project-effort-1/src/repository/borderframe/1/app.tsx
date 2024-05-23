import React from "react";
import './style.css';

const CustomApp = () => {
  return <div>
    <h1>Example Border Frame</h1>
      <BorderFrame borderColor="orange">
        <p>This is a content inside the border frame.</p>
      </BorderFrame>
  </div>;
};

export default CustomApp;

interface BorderFrameProps {
  children: React.ReactNode;
  borderColor: string;
}

const BorderFrame: React.FC<BorderFrameProps> = ({children,borderColor='red'}) => {
  return (
    <>
      <div className="border-frame" style={{ borderColor}}>
        {children}
      </div>
    </>
  );
};
