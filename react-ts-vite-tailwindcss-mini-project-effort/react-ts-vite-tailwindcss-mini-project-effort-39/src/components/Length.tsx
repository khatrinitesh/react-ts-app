import React from 'react';

const LengthExample:React.FC<LengthProps> = ({text,items}) => {
  return (
    <>
          <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>length Property Example</h2>

      <p><strong>Text:</strong> {text}</p>
      <p><strong>Text Length:</strong> {text.length}</p>

      <p><strong>Items:</strong> {items.join(", ")}</p>
      <p><strong>Items Count:</strong> {items.length}</p>
    </div>

    </>
  );
}

export default LengthExample;
