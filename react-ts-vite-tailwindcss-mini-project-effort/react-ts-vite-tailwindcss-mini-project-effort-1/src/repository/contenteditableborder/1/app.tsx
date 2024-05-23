import React, { useState, useRef } from "react";

const app = () => {
  return (
    <>
        <ContentEditable/>
    </>
  )
}

export default app

const ContentEditable:React.FC = () => {
  const [content, setContent] = useState<string>("");

  // Ref to the contenteditable element
  const contentRef = useRef<HTMLDivElement>(null);

  // Function to handle content change
  const handleContentChange = () => {
    if (contentRef.current) {
      setContent(contentRef.current.innerText);
    }
  };

  return (
    <div
      ref={contentRef}
      contentEditable
      style={{ border: "1px solid black", padding: "5px" }}
      onInput={handleContentChange}
    >
      {content}
    </div>
  );
}