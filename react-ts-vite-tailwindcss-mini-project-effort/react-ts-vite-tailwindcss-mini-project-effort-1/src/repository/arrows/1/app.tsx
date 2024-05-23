import React from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <div>
      <Arrow direction="top" />
      <Arrow direction="right" />
      <Arrow direction="bottom" />
      <Arrow direction="left" />
    </div>
  );
};

export default CustomApp;

interface ArrowProps {
  direction: "top" | "right" | "bottom" | "left";
}

const Arrow: React.FC<ArrowProps> = ({ direction }) => {
  let arrowStyle: React.CSSProperties = {};

  switch (direction) {
    case "top":
      arrowStyle = {
        borderBottom: "10px solid black",
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
      };
      break;
    case "right":
      arrowStyle = {
        borderLeft: "10px solid black",
        borderTop: "5px solid transparent",
        borderBottom: "5px solid transparent",
      };
      break;
    case "bottom":
      arrowStyle = {
        borderTop: "10px solid black",
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
      };
      break;
    case "left":
      arrowStyle = {
        borderRight: "10px solid black",
        borderTop: "5px solid transparent",
        borderBottom: "5px solid transparent",
      };
      break;
    default:
      break;
  }
  return <div className={`arrow arrow-${direction}`} style={arrowStyle}></div>;
};
