import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <SlideToggle/>
    </>
  )
}

export default CustomApp

const SlideToggle:React.FC = () => {
    const [isToggle,setIsToggle] = useState(false);

    const btnToggle = () => {
        setIsToggle(!isToggle)
    }
    return(
        <>
        <button onClick={btnToggle}>{isToggle ? 'hide' : 'show'}</button>
         {isToggle && <div>Content Toggle</div>}
        </>
    )
}