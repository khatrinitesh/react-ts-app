import React from 'react';
import type { ConcatProps } from '../interface';

const Concat:React.FC<ConcatProps> = ({str1,str2}) => {
     const fullString = str1.concat(" ", str2);
  return (
    <>
       <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>concat() Example</h2>
      <p><strong>String 1:</strong> {str1}</p>
      <p><strong>String 2:</strong> {str2}</p>
      <p><strong>Concatenated:</strong> {fullString}</p>
    </div>
    </>
  );
}

export default Concat;
