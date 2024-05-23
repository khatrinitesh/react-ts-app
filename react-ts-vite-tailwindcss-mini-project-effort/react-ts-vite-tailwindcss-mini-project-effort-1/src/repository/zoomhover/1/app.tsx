import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
        <h1 className="text-2xl font-bold mb-4">Zoom on Hover Example</h1>
         <ZoomHover />
    </>
  )
}

export default CustomApp

const ZoomHover: React.FC = () => {
    return (
      <div className="relative overflow-hidden group">
        <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt="Zoom on Hover"
          className="transition-transform duration-300 group-hover:scale-110 w-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <p className="text-white text-lg font-semibold">Zoom In</p>
        </div>
      </div>
    );
  };
  