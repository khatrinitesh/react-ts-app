import React from "react";

const CustomApp = () => {
  return <>
    <BrowserWindow title="Browser window" url="https://maps.app.goo.gl/EXgGEJsinqM9SAoB9"/>
  </>;
};

export default CustomApp;

interface BrowserWProps {
  title: string;
  url: string;
}

const BrowserWindow: React.FC<BrowserWProps> = ({ title, url }) => {
  return (
    <>
      <div className="browser-window">
        <div className="browser-header">
          <div className="browser-controls">
            <div className="browser-dot"></div>
            <div className="browser-dot"></div>
            <div className="browser-dot"></div>
          </div>
          <div className="browser-title">{title}</div>
        </div>
        <div className="browser-content">
          <iframe title={title} src={url} className="browser-iframe" />
        </div>
      </div>
    </>
  );
};
