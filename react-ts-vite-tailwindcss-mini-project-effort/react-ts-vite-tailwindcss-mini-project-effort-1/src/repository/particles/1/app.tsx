import React, { useRef, useEffect, useState } from "react";
import Particles from 'particles.js';
import particlesConfig from './particles.json'; // Import the particles configuration

import "./style.css";

const CustomApp = () => {
  return (
    <>
      <div className="relative h-screen">
      <ParticleCanvas />
      {/* Your other content goes here */}
    </div>
    </>
  );
};

export default CustomApp;

const ParticleCanvas: React.FC = () => {
    const particlesRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (particlesRef.current) {
        Particles.init({
          ...particlesConfig,
          // Additional options if needed
          selector: particlesRef.current,
        });
      }
    }, []);
  
    return <div ref={particlesRef} className="absolute inset-0 z-0" />
  };
  

