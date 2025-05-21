import React from 'react';
import type { EndsWithProps } from '../interface';

const EndsWith:React.FC<EndsWithPropss> = ({baseString, suffix }) => {
     const result = baseString.endsWith(suffix);
  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>endsWith() Example</h2>
      <p><strong>Base String:</strong> {baseString}</p>
      <p><strong>Suffix:</strong> {suffix}</p>
      <p>
        <strong>Result:</strong>{" "}
        {result ? "Yes, it ends with the suffix." : "No, it doesn't."}
      </p>
    </div>
    </>
  );
}

export default EndsWith;
