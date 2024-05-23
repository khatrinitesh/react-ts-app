import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
    <h1 id="myElement" className="initialClass">Hello, world!</h1>
      <RemoveClass elementID="myElement" className='initialClass'/>
    </>
  )
}

export default CustomApp

interface RemoveClassProps{
    className:string; // initial class name
    elementID:string; // ID of the element to remove the class from 
}

const RemoveClass:React.FC<RemoveClassProps> = ({className,elementID  }) => {
    const [classList, setClassList] = useState<string>(className);

    const removeClass = () => {
      const element = document.getElementById(elementID);
      if (element) {
        element.classList.remove(classList);
      }
    };
    return(
        <>
        <button onClick={removeClass}>
            Remove Class
        </button>
        </>
    )
}