import React from 'react'

const CustomApp = () => {
  return (
    <>
        <WrappedText text="Ullamco nulla laboris sint aliqua."/>
    </>
  )
}

export default CustomApp

const WrappedText: React.FC<{ text: string }> = ({ text }) => {
    return (
      <div style={{ width: '200px', wordWrap: 'break-word' }}>
        {text}
      </div>
    );
  };