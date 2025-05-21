import React from 'react';

const CharAt:React.FC<CharAtProps> = ({text,index}) => {
    const character = text.charAt(index);
  return (
    <>
     <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>charAt() Example</h2>
      <p>
        <strong>Text:</strong> {text}
      </p>
      <p>
        <strong>Index:</strong> {index}
      </p>
      <p>
        <strong>Character at index {index}:</strong> {character}
      </p>
    </div> 
    </>
  );
}

export default CharAt;
