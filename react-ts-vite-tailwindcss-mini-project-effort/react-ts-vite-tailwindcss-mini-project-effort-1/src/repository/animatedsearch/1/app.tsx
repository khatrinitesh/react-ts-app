import React, { useState } from 'react';
import './style.css';

const CustomApp = () => {
  return (
    <>
        <AnimatedSearch/>
    </>
  )
}

export default CustomApp

const AnimatedSearch:React.FC = () => {
    const [isFocused,setIsfocused] = useState<boolean>(false);

    const handleF  = () => {
        setIsfocused(true)
    }
    const handleB  = () => {
        setIsfocused(false)
    }

    return(
        <>
         <div className={`search-container ${isFocused ? 'focused' : ''}`}>
            <input type="text" placeholder="Search..." onFocus={handleF} onBlur={handleB} />
            <div className="search-icon"></div>
         </div>
        </>
    )
}