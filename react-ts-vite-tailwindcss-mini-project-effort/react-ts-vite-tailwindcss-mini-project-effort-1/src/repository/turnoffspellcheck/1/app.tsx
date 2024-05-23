import React from 'react'

const CustomApp = () => {
  return (
    <div>
        <MyComponent/>
    </div>
  )
}

export default CustomApp

const MyComponent: React.FC = () => {
    return (
      <div>
        {/* Input field with spellcheck turned off */}
        <input type="text" spellCheck={true} />
      </div>
    );
  };