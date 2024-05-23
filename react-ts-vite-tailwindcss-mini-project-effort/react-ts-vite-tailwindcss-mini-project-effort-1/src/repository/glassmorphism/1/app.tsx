import React, { useState } from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
      <Glassmorphism />
    </>
  );
};

export default CustomApp;

const Glassmorphism: React.FC = () => {
  return (
    <>
      <div className="glass-panel bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg border border-gray-300 rounded-lg p-8 max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">
        <a
          href="https://superdevresources.com/glassmorphism-ui-css/"
          target="_blank"
          className="text-white hover:text-gray-200"
        >
          Glassmorphism CSS Panels and Buttons
        </a>
      </h1>
      <p className="text-white opacity-75">
        Glassmorphism is achieved using transparency and background blur to get
        a frosted-glass like effect.
      </p>
      <div className="glass-toolbar mt-4">
        <button className="glass-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Glass Button
        </button>
        <a
          href="https://superdevresources.com/glassmorphism-ui-css/"
          target="_blank"
          className="glass-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Glass Link Button
        </a>
      </div>
    </div>
    </>
  );
};
