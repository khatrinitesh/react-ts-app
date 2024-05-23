import React from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <div>
      <BlurBackground imgUrl="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg">
        <h1>Welcome to my website</h1>
        <p>This is some content with a blurred background image</p>
      </BlurBackground>
    </div>
  );
};

export default CustomApp;

interface BlurBgProps {
  imgUrl: string;
  children: React.React.Node;
}

const BlurBackground: React.FC<BlurBgProps> = ({ imgUrl, children }) => {
  return (
    <>
      <div
        className="blur-background"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="blur-layer" />
        <div className="content">{children}</div>
      </div>
    </>
  );
};
