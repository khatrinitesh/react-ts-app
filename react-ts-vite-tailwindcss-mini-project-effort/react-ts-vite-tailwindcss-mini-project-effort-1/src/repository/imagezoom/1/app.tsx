import React from "react";
import { useState,useRef,useEffect  } from "react";
import "./style.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const CustomApp = () => {
  return (
    <>
      <ImageZoom imgID={1} resultID="1" />
    </>
  );
};

export default CustomApp;

interface ImageZoomProps {
    imgID: string;
    resultID: string;
  }

  const ImageZoom: React.FC<ImageZoomProps> = ({ imgID, resultID }) => {
    const lensRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      let lens: HTMLDivElement | null = lensRef.current;
      let img: HTMLImageElement | null = imgRef.current;
      let result: HTMLDivElement | null = resultRef.current;
      let cx: number, cy: number;
  
      if (img && result) {
        // Calculate the ratio between result DIV and lens
        cx = result.offsetWidth / (lens ? lens.offsetWidth : 1);
        cy = result.offsetHeight / (lens ? lens.offsetHeight : 1);
  
        // Set background properties for the result DIV
        result.style.backgroundImage = `url('${img.src}')`;
        result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
  
        // Execute a function when someone moves the cursor over the image, or the lens
        const moveLens = (e: MouseEvent | TouchEvent) => {
          e.preventDefault();
  
          let pos = getCursorPos(e);
          let x = pos.x - (lens ? lens.offsetWidth / 2 : 0);
          let y = pos.y - (lens ? lens.offsetHeight / 2 : 0);
  
          if (x > img.width - (lens ? lens.offsetWidth : 0)) {
            x = img.width - (lens ? lens.offsetWidth : 0);
          }
          if (x < 0) { x = 0; }
          if (y > img.height - (lens ? lens.offsetHeight : 0)) {
            y = img.height - (lens ? lens.offsetHeight : 0);
          }
          if (y < 0) { y = 0; }
  
          if (lens) {
            lens.style.left = `${x}px`;
            lens.style.top = `${y}px`;
          }
  
          if (result) {
            result.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
          }
        };
  
        const getCursorPos = (e: MouseEvent | TouchEvent) => {
          let x = 0, y = 0;
          let a = img.getBoundingClientRect();
          let pageX = 0, pageY = 0;
  
          if (e instanceof MouseEvent) {
            pageX = e.pageX;
            pageY = e.pageY;
          } else if (e instanceof TouchEvent) {
            pageX = e.touches[0].pageX;
            pageY = e.touches[0].pageY;
          }
  
          x = pageX - a.left - window.pageXOffset;
          y = pageY - a.top - window.pageYOffset;
  
          return { x, y };
        };
  
        if (lens && img) {
          lens.addEventListener("mousemove", moveLens);
          img.addEventListener("mousemove", moveLens);
          lens.addEventListener("touchmove", moveLens);
          img.addEventListener("touchmove", moveLens);
        }
  
        return () => {
          if (lens && img) {
            lens.removeEventListener("mousemove", moveLens);
            img.removeEventListener("mousemove", moveLens);
            lens.removeEventListener("touchmove", moveLens);
            img.removeEventListener("touchmove", moveLens);
          }
        };
      }
    }, []);
  
    return (
      <>
        <div ref={lensRef} className="img-zoom-lens"></div>
        <img ref={imgRef} id={imgID} src="https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg" />
        <div ref={resultRef} id={resultID} className="img-zoom-result"></div>
      </>
    );
  };