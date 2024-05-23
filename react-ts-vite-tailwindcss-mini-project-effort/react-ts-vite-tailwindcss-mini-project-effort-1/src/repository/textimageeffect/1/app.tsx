import React from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
     <NeonText text="Lorem consectetur in qui amet laborum dolore enim velit mollit anim eiusmod."/>
    </>
  )
}

export default CustomApp

interface NeoProps{
    text:string;
}

const NeonText: React.FC<NeoProps> = ({ text }) => {
    return (
      <div className="container mx-auto">
        <h1 className="neon text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{text}</h1>
      </div>
    );
  };