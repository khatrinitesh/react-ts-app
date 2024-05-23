import React from 'react'

const CustomApp = () => {
  return (
    <div>
        <Title/>
    </div>
  )
}

export default CustomApp

interface TitleProps {
    fontSize?: string;
  }

  const Title: React.FC<TitleProps> = ({ fontSize = "5rem" }) => {
    return (
        <h1 style={{ 
            fontSize,
            margin: 0,
            padding: 0,
            WebkitTextStroke: "1px black",
            color: "white",
            textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
          }}>
            Sticky Social Bar
          </h1>
    );
  };

