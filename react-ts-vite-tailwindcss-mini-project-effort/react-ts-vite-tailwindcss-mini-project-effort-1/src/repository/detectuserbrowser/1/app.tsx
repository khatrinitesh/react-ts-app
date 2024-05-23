import React from "react";

const CustomApp = () => {
  return <div>
    <BrowserRouter/>
  </div>;
};

export default CustomApp;

const BrowserRouter: React.FC = () => {
  const DetectApp = () => {
    const userAgent = navigator.userAgent;
    let browserName = "unknown";

    // chrome
    if (userAgent.indexOf("Chrome") > -1) {
      browserName = "google chrome";
    } 
    // safari
    else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Safari";
    } 
    // msie
    else if (
      userAgent.indexOf("MSIE") > -1 ||
      userAgent.indexOf("Trident/") > -1
    ) {
      browserName = "Internet Explorer";
    } 
    // inernet explorer
    else if (userAgent.indexOf("Edge") > -1) {
      browserName = "Microsoft Edge";
    } 
    // opera
    else if (
      userAgent.indexOf("Opera") > -1 ||
      userAgent.indexOf("OPR") > -1
    ) {
      browserName = "Opera";
    }
    // firefox
    else if(userAgent.indexOf('Firefox') > -1){
        browserName = 'Mozilla Firefox'
    }

    return browserName;
  };

  const browser = DetectApp();
  return (
    <>
      <h2>User Browser:</h2>
      <p>{browser}</p>
    </>
  );
};
