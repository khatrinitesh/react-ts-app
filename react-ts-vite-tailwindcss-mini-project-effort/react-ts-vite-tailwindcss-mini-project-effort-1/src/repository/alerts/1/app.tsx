import React from 'react'

const CustomApp = () => {
  return (
    <>
        <Alert/>
    </>
  )
}

export default CustomApp

interface AlertProps{
    message:string
}

const Alert:React.FC<AlertProps> = (message) => {

    const showAlert = () => {
        alert('Button clicked')
    }
    return(
        <>
        <h1>React TypeScript Alert Example</h1>
      <button onClick={showAlert}>Click me!</button>
        </>
    )
}