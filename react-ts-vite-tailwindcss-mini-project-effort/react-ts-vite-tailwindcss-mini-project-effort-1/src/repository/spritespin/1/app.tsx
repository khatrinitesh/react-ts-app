import React from 'react'

const CustomApp = () => {
  return (
    <>
        <h1>Sprite Example</h1>
      <SpriteComponent sprite={spriteData} />
    </>
  )
}

export default CustomApp

// Define the Sprite interface
interface Sprite {
    id: number;
    name: string;
    image: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number; // New property for rotation angle in degrees
  }

  // Sample sprite data
const spriteData: Sprite = {
    id: 1,
    name: "Player",
    image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    x: 100,
    y: 50,
    width: 32,
    height: 32,
    rotation: 0 // Initial rotation angle
  };

  const SpriteComponent: React.FC<{ sprite: Sprite }> = ({ sprite }) => {
    return (
      <div
        style={{
          position: "relative",
          top: sprite.y,
          left: sprite.x,
          width: sprite.width,
          height: sprite.height,
          backgroundImage: `url(${sprite.image})`,
          backgroundSize: "cover",
          transform: `rotate(${sprite.rotation}deg)` // Apply rotation
        }}
      />
    );
  };

  