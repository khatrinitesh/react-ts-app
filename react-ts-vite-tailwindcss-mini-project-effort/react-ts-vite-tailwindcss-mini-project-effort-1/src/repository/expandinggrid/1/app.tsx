import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <div>
        <ExpandingGrid/>
    </div>
  )
}

export default CustomApp

const ExpandingGrid: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className={`expanding-grid ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
        <div className="content">
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
          {isExpanded && (
            <div className="expanded-content">
              <p>Additional content...</p>
            </div>
          )}
        </div>
      </div>
    );
  };
