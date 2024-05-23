import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
    <PopOverApp trigger={<button>Click me</button>}  content={<div>Popover content</div>}/>
    </>
  )
};

export default CustomApp;

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

const PopOverApp: React.FC<PopoverProps> = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <div onClick={togglePopover}>{trigger}</div>
        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              zIndex: 999,
              backgroundColor: "white",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
          >
            {content}
          </div>
        )}
      </div>
    </>
  );
};
