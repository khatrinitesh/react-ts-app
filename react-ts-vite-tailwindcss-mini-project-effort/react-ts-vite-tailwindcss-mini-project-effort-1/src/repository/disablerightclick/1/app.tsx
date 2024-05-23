import React from "react";

const CustomApp = () => {
  return (
    <>
      <div>
        <DisableRightClick />
      </div>
      ;
    </>
  );
};

export default CustomApp;

const DisableRightClick: React.Fc = () => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("right clicked isn't allowed")
  };
  return (
    <>
      <div onContextMenu={handleContextMenu}>
        <h2>Right-clicking is disabled on this element</h2>
        <p>You can't right-click here.</p>
      </div>
    </>
  );
};
