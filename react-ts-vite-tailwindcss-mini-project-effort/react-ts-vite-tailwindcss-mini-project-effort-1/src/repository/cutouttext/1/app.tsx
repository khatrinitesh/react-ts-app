import React,{useEffect} from "react";
import './style.css';

const CustomApp = () => {
  return <>
    <CutOffText/>
  </>;
};

export default CustomApp;

const CutOffText: React.FC = () => {
    useEffect(() => {
      setTimeout(() => {
        const element = document.querySelector('.cutoffstart');
        if (element) {
          element.classList.add('cutoffend');
        }
      }, 800);
  
      setTimeout(() => {
        const element = document.querySelector('.cutoffend');
        if (element) {
          element.classList.add('stoptransitions');
        }
      }, 2000);
    }, []);
  
    return (
      <body>
        <header>
          <h1 className="cutoffstart" data-text="Text with cut off">
            Text with cut off
          </h1>
        </header>
      </body>
    );
  };