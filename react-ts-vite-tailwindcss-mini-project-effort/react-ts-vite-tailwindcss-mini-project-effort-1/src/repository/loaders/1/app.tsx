import React, { useRef, useEffect, useState } from "react";
import "./style.css";


const CustomApp = () => {
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate data loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false)   
    },3000)
    return () => clearTimeout(timer);
  },[])

  return (
    <>
     <h1 className="font-bold text-[32px]">My App</h1>
      <Loader isLoading={loading}/>
      <p className="text-[red]">This content is visible when the loader is not loading.</p>
    </>
  );
};

export default CustomApp;


interface LoaderProps {
    isLoading: boolean;
}


const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <>
      <div style={{ display: isLoading ? "block" : "none" }}>
        <div className="loader"></div>
      </div>
    </>
  );
};
