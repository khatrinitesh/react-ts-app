import React, { useState,useEffect } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
      <FixedFooter/>
    </>
  );
};

export default CustomApp;

const FixedFooter: React.FC = () => {
    return (
      <footer className="fixed-footer">
        This is a fixed footer.
      </footer>
    );
  };