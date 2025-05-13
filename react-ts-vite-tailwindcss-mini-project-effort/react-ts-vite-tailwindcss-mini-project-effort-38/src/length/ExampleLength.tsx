import React, { useState } from "react";

const ExampleLength: React.FC = () => {
  const [arrayLength, setArrayLength] = useState<string>(null);
  const [stringLength, setStringLength] = useState<string>(null);
  const [numberLength, setNumberLength] = useState<number>(null);

  const fruits = ["apple", "banana", "cherry"];
  const sampleText = "Hello React";
  const sampleNumber = 123456;

  const handleCheckLength = () => {
    setArrayLength(fruits.length);
    setStringLength(sampleText.length);
    setNumberLength(sampleNumber.toString().length);
  };
  return (
    <>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">
          ReactJS <code>.length</code> Example
        </h2>

        <button
          onClick={handleCheckLength}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Show Lengths
        </button>

        <div className="mt-6 space-y-4">
          <p>
            <strong>Array:</strong> {JSON.stringify(fruits)} → Length:{" "}
            <code>{arrayLength ?? "-"}</code>
          </p>
          <p>
            <strong>String:</strong> "{sampleText}" → Length:{" "}
            <code>{stringLength ?? "-"}</code>
          </p>
          <p>
            <strong>Number:</strong> {sampleNumber} → Digit Count (via string):{" "}
            <code>{numberLength ?? "-"}</code>
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleLength;
