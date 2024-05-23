import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Progress Bar Example</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default CustomApp;

interface ProgressBarProps {
  progress: number; // progress value (between 0 and 100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <>
      <div className="bg-gray-200 h-8 w-full rounded-lg overflow-hidden">
        <div
          className="bg-blue-500 h-full text-center text-white"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </>
  );
};
