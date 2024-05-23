import React from 'react'

const CustomApp:React.FC = () => {
  return (
    <>
      <MyComponent/>
    </>
  )
}

export default CustomApp

const MyComponent: React.FC = () => {
    return (
      <div className="custom-font">
        <h1>Hello, World!</h1>
        <p>This text will be styled with the custom font.</p>
      </div>
    );
  }