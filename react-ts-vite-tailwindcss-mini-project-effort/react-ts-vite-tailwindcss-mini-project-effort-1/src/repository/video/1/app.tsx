import React, { useRef, useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <VideoPlayer/>
    </>
  )
}

export default CustomApp

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
  
    const togglePlay = () => {
      if (videoRef.current) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
        setIsPlaying(!isPlaying);
      }
    };
  
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    };
  
    const handleSeek = (time: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
        setCurrentTime(time);
      }
    };
  
    return (
      <div>
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <div>
          <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
        <div>
          Current Time: {currentTime.toFixed(2)} seconds
        </div>
        <div>
          <input
            type="range"
            min={0}
            max={videoRef.current?.duration || 0}
            value={currentTime}
            onChange={(e) => handleSeek(parseFloat(e.target.value))}
          />
        </div>
      </div>
    );
  };
