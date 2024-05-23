import React, { useState } from "react";

const CustomApp = () => {
    const fbs_click = () => {
        // Implementation for Facebook share
        console.log('https://www.facebook.com/');
        
      };
      
      const tbs_click = () => {
        // Implementation for Twitter share
        console.log('https://www.twitter.com/');
      };
      
      const lbs_click = () => {
        // Implementation for LinkedIn share
        console.log('https://www.linkedin.com/');
      };
      
      const rbs_click = () => {
        // Implementation for Reddit share
        console.log('https://www.reddit.com/');
      };
      
      const pbs_click = () => {
        // Implementation for Pinterest share
        console.log('https://www.pinterest.com/');
      };
  return (
    <>
      <h1>Share Box</h1>
      <SocialMediaProps />
    </>
  );
};

export default CustomApp;

interface ShareButton {
  name: string;
  onClick: () => void;
  iconUrl: string;
}
const shareButtons: ShareButton[] = [
  {
    name: "Facebook",
    onClick: () => fbs_click(),
    iconUrl: "https://img.icons8.com/material-rounded/96/000000/facebook-f.png",
  },
  {
    name: "Twitter",
    onClick: () => tbs_click(),
    iconUrl:
      "https://img.icons8.com/material-rounded/96/000000/twitter-squared.png",
  },
  {
    name: "LinkedIn",
    onClick: () => lbs_click(),
    iconUrl: "https://img.icons8.com/material-rounded/96/000000/linkedin.png",
  },
  {
    name: "Reddit",
    onClick: () => rbs_click(),
    iconUrl: "https://img.icons8.com/ios-glyphs/90/000000/reddit.png",
  },
  {
    name: "Pinterest",
    onClick: () => pbs_click(),
    iconUrl: "https://img.icons8.com/ios-glyphs/90/000000/pinterest.png",
  },
];

const SocialMediaProps: React.FC = () => {
  return (
    <>
       <div className="share-buttons-container">
        <div className="share-list">
          {shareButtons.map((button, index) => (
            <a
              key={index}
              className={`${button.name.toLowerCase()}-h`}
              onClick={button.onClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={button.iconUrl} alt={button.name} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
