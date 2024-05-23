import React from 'react'

const CustomApp = () => {
  return (
    <>
        <h1>Cursor Example</h1>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'lightgray',
          cursor: 'pointer', // Change cursor to pointer on hover
        }}
      >
        Hover over this div to see the cursor change.
      </div>
    </>
  )
}

export default CustomApp