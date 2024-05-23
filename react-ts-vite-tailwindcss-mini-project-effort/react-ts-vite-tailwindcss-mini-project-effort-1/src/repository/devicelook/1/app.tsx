import React from "react";

const CustomApp = () => {
  return <div>
    <DeviceDetector/>
  </div>;
};

export default CustomApp;

const DeviceDetector: React.Fc = () => {
  const detectDevice = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile ? "mobile device" : "desktop device";
  };

  const deviceType = detectDevice();
  console.log(deviceType)
  return (
    <>
      <h2>Device Type:</h2>
      <p>{deviceType}</p>
    </>
  );
};
