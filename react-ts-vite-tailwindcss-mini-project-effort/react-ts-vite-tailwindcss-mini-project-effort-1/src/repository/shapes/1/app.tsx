import React from "react";

const CustomApp = () => {
    // Example shapes data
  const shapes: Shape[] = [
    { id: 1, type: "rectangle", x: 50, y: 50, width: 100, height: 50, color: "red" },
    { id: 2, type: "circle", x: 200, y: 100, width: 50, height: 50, color: "blue" },
    // Add more shapes as needed
  ];
  return (
    <>
     <h1>Shapes</h1>
      {shapes.map((shape) => (
        <ShapeComponent key={shape.id} shape={shape} />
      ))}
    </>
  )
};

export default CustomApp;

interface Shape {
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    type: string;
  color: string;
}

// Define a component to render a shape
const ShapeComponent: React.FC<{ shape: Shape }> = ({ shape }) => {
    // Determine the appropriate style for the shape
    const style: React.CSSProperties = {
      position: "absolute",
      left: shape.x,
      top: shape.y,
      width: shape.width,
      height: shape.height,
      backgroundColor: shape.color,
    };
  
    // Render the shape
    return <div style={style}></div>;
  };
  

