import React from 'react'

const CustomApp = () => {
  return (
    <div>
         <h1>Welcome to My App</h1>
      <BodyText text="This is some body text." />
    </div>
  )
}

export default CustomApp

interface BodyTextProps {
    text: string;
  }

  const BodyText: React.FC<BodyTextProps> = ({ text }) => {
    return (
      <p>{text}</p>
    );
  }