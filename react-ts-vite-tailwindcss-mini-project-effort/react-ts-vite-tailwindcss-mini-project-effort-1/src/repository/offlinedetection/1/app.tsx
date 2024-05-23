import React, { useState,useEffect  } from "react";
// import "./style.css";

const CustomApp = () => {
  
  return (
    <>
      <NetWork />
    </>
  );
};

export default CustomApp;

interface NetworkProps {}

const NetWork: React.FC<NetworkProps> = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // online
    const handleOnline = () => {
      setIsOnline(true);
    };

    // offline
    const handleOffline = () => {
      setIsOnline(false);
    };

     // window add and remove 
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <>
      {isOnline ? (<p style={{color:'green'}}>You are online</p>) : (<p style={{color:'red'}}>You are offline</p>)}
    </>
  )
};
