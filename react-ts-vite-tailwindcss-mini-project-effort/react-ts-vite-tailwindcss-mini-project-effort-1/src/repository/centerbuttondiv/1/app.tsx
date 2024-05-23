import React from "react";

const CustomApp = () => {
  return(
    <>
    <CenterBtn/>
    </>
  )
};

export default CustomApp;

const CenterBtn: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Centered Button
        </button>
      </div>
    </>
  );
};
