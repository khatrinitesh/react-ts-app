import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
      <FadeToggle/>
    </>
  )
}

export default CustomApp

const FadeToggle:React.FC  =({children}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleFadeOut = () => {
      setIsVisible(!isVisible);
    };
  
  return(
    <>
    <button onClick={handleFadeOut}>Fade Out</button>
     {isVisible && (
        <div className="fadeout">
          <h2>Fadeout Element</h2>
          <p>This element will fade out when the button is clicked.</p>
          
        </div>
      )}
    </>
  )
}