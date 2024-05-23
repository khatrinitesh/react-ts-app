import React from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <div>
      <Dropmorphism>
      <div className="content">
        <h1>Title</h1>
        <p>This is some content inside the dropmorphism component.</p>
      </div>
    </Dropmorphism>
    </div>
  );
};

export default CustomApp;

const Dropmorphism: React.FC = ({ children }) => {
  return (
    <>
      <div className="dropmorphism">
        {children}
        <div className="shadow"></div>
      </div>
    </>
  );
};
