import React, { useEffect, useState } from "react";
import './style.css';

const CustomApp: React.FC = () => {
  return (
    <>
      <SubpageSection />
    </>
  );
};

export default CustomApp;



const SubpageSection: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  

  return (
    <>
      <div id="section">
        <div className="article">
          <p>
            Bacon ipsum dolor amet sirloin jowl turducken pork loin pig pork
            belly, chuck cupim tongue beef doner tri-tip pancetta spare ribs
            porchetta.
          </p>
          <p className={isExpanded ? "moretext" : "moretext hidden"}>
            Brisket ball tip cow sirloin. Chuck porchetta kielbasa pork chop
            doner sirloin, bacon beef brisket ball tip short ribs.
          </p>
        </div>
        <button className="moreless-button" onClick={toggleExpand}>
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </>
  );
};
