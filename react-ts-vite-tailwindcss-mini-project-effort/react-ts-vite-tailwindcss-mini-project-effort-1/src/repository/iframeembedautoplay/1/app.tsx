import React, { useState, useEffect } from "react";
// import "./style.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { styled } from 'styled-components';


const CustomApp: React.FC = () => {


  return (
    <>
      <IframeEmbed src="https://www.youtube.com/embed/UWFrl79092w?si=oD1sWpDBnz8m-ttP" autoplay width="560px" height="300px"/ >
    </>
  );
};

export default CustomApp;


interface IframeProps {
    src:string;
    autoplay?:boolean;
    width?:string;
    height?:string;
}

const IframeEmbed: React.FC<IframeProps> = ({src,autoplay=true,width='100%',height='100%'}) => {
    const embedSrc = autoplay ? `${src}&autoplay=1` : src;
    return (
      <>
       <iframe
      src={embedSrc}
      title="Embedded content"
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
    ></iframe>
      </>
    );
  };