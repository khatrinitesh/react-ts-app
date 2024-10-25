import React from 'react';
import styles from "./Arrow.module.css"

const FinalApp = () => {
  return (
    <>
      <ArrowComponents/>
    </>
  );
}

export default FinalApp;

const ArrowComponents: React.FC = () => {
    return (
        <div>
        <div className={`relative bg-teal-800 text-white py-4 px-0 text-center w-full inline-block ${styles.bottomArrow}`}>
          Div with Bottom Arrow
        </div>
  
        <div className={`relative bg-gray-500 text-white p-4 mt-5 inline-block ${styles.leftArrow}`}>
          Div with Left Arrow
        </div>
  
        <div className={`relative bg-orange-500 text-white p-4 inline-block ${styles.rightArrow}`}>
          Div with Right Arrow
        </div>
  
        <a href="#" className={`relative bg-green-700 text-white no-underline py-5 px-10 inline-block hover:bg-brown-700 ${styles.upArrow}`}>
          Button with Up Arrow
        </a>
      </div>
    );
  };
