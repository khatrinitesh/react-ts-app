import React from 'react'

const CustomApp = () => {
  return (
    <>
      <Clearfix>
      {/* Your floated elements */}
      <div style={{ float: 'left' }}>Element 1</div>
      <div style={{ float: 'left' }}>Element 2</div>
    </Clearfix>
    </>
  )
}

export default CustomApp



const Clearfix: React.FC = ({ children }) => {
    const clearfixStyle: React.CSSProperties = {
      overflow: 'auto', // This triggers the clearfix
    };
  
    return <div style={clearfixStyle}>{children}</div>;
  };
