import React from 'react'

const CustomApp = () => {
  return (
    <>
        <AlertBtns/>
    </>
  )
}

export default CustomApp

const AlertBtns:React.FC = () => {

    const handleClick=  (message) => {
        alert(message)
    }
    return(
        <>
         <button onClick={() => handleClick('you clicked button 1')}>Btn 1</button>
         <button onClick={() => handleClick('you clicked button 2')}>Btn 2</button>
        </>
    )
}