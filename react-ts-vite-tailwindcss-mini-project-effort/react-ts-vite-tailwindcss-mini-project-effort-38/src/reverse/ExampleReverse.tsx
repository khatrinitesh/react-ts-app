import React, { useState } from "react";

const ExampleReverse: React.FC = () => {
  const [fruits, setFruits] = useState<string[]>(["apple", "banana", "mango"]);
  const [text, setText] = useState<string>("React");

  const handleReverseArray = (): void => {
    // Clone the array to avoid direct mutation
    const reversedFruits = [...fruits].reverse();
    setFruits(reversedFruits);
  };

  const handleReverseText = (): void => {
    const reversed = text.split("").reverse().join("");
    setText(reversed);
  };

  return (
    <>
      <div style={{ padding: "1rem", fontFamily: "Arial" }}>
        <h2>
          React TypeScript Example – <code>reverse()</code>
        </h2>

        <div style={{ marginBottom: "1rem" }}>
          <h4>Array Reverse</h4>
          <p>
            <strong>Fruits:</strong> {JSON.stringify(fruits)}
          </p>
          <button onClick={handleReverseArray} style={{ marginTop: "0.5rem" }}>
            Reverse Array
          </button>
        </div>

        <hr />

        <div style={{ marginTop: "1rem" }}>
          <h4>String Reverse</h4>
          <p>
            <strong>Text:</strong> {text}
          </p>
          <button onClick={handleReverseText} style={{ marginTop: "0.5rem" }}>
            Reverse String
          </button>
        </div>
      </div>
    </>
  );
};

export default ExampleReverse;
