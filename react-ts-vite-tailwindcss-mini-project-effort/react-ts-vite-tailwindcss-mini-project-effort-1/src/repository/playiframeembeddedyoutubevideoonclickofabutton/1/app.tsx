import React, { useRef, useEffect, useState } from "react";
// import "./style.css";

const CustomApp = () => {
  return (
    <>
      <PlayingCustom/>
    </>
  );
};

export default CustomApp;


const PlayingCustom:React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return(
        <>
        <button onClick={handlePlayVideo}>Play video</button>
        {isPlaying && (
             <iframe
             width="560"
             height="315"
             src="https://youtu.be/9YCbrYubyg8?si=Y_cS6RrtmVTzn1zA?autoplay=1&muted=1"
             title="YouTube video player"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
           />
        )}
        </>
    )
}