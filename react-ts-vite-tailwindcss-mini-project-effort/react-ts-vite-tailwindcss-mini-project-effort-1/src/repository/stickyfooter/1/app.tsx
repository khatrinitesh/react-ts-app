import React from 'react'

const CustomApp = () => {
  return (
    <>
        <StickyFooter height='50px'/>
    </>
  )
}

export default CustomApp

// Define interface for footer data
interface FooterData {
    height: string;
  }

  const StickyFooter: React.FC<FooterData> = ({ height, children }) => {
    return (
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <div style={{ paddingBottom: height }}>
          {/* Your main content goes here */}
          {children}
        </div>
        <footer
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height,
            background: "lightgray",
            textAlign: "center",
            display:"flex",
            alignItem:"center",
          }}
        >
          {/* Footer content */}
          <p>This is a sticky footer</p>
        </footer>
      </div>
    );
  };