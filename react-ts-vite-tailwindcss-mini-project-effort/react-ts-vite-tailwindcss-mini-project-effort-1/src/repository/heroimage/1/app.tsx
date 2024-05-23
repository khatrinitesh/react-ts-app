import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp: React.FC = () => {
  return (
    <>
       <HeroImage
        imageUrl="https://example.com/hero-image.jpg"
        title="Welcome to our website"
        subtitle="Explore our amazing products"
      />
    </>
  );
};

export default CustomApp;

interface HeroImageProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, title, subtitle }) => {
    return (
      <div className="hero-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="hero-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    );
  };