import React, { useState,useEffect } from 'react'

const CustomApp = () => {
  return (
    <>
      <FadeOut>asdsd</FadeOut>
    </>
  )
}

export default CustomApp

const FadeOut:React.FC  =({children}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleFadeOut = () => {
      setIsVisible(false);
    };
  
  return(
    <>
     {isVisible && (
        <div className="fadeout">
          <h2>Fadeout Element</h2>
          <p>This element will fade out when the button is clicked.</p>
          <button onClick={handleFadeOut}>Fade Out</button>
        </div>
      )}
    </>
  )
}