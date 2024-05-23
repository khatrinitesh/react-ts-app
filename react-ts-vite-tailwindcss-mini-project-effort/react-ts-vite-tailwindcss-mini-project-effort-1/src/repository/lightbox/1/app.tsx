import React,{ useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
    const [showLightbox,setShowlightbox] = useState<boolean>(false);
    const images = [
        'https://cdn.pixabay.com/photo/2023/06/06/16/38/ai-generated-8045101_1280.jpg',
        'https://wallpaperaccess.com/full/1398313.jpg',
        'https://wallpaperaccess.com/full/1398313.jpg',
    ]

    const openLight = () => {
        setShowlightbox(true)
    }
    const clsLight = () => {
        setShowlightbox(false)
    }
  return (
    <>
    <h1>My Gallery</h1>
    <button onClick={openLight}>Open Lightbox</button>
    {showLightbox && (
        <Lightbox images={images} onClose={clsLight}/>
    )}
    </>
  );
};

export default CustomApp;

interface LightboxProps{
    images:string[];
    onClose:() => void;
}

const Lightbox:React.FC<LightboxProps> = ({images,onClose}) => {

    
    return(
        <div className="lightbox-overlay" onClick={onClose}>
            {images.map((image,index) => (
                <img src={image} key={index} alt={`Image ${index + 1}`}/>
            ))}
        </div>
    )
}

