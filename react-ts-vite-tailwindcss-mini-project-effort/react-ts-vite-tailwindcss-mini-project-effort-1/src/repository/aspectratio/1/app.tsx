import React from "react";

const CustomApp = () => {
  return (
    <>
      <div>
        <h1>Aspect Ratio Example</h1>
        <AspectRatio ratio={16 / 9}>
          <img src="https://via.placeholder.com/500x281" alt="Placeholder" />
        </AspectRatio>
      </div>
    </>
  );
};

export default CustomApp;

interface AspectRatioProps {
  ratio: number; // Aspect ratio (height / width)
  children: React.ReactNode;
}

const AspectRatio: React.FC<AspectRatioProps> = ({ratio,children}) => {
    const containerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        paddingTop: `${(1 / ratio) * 100}%`, // Maintain aspect ratio
      };
    
      const contentStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      };
    
  return (
    <>
      <div style={containerStyle}>
        <div style={contentStyle}>{children}</div>
      </div>
    </>
  );
};
