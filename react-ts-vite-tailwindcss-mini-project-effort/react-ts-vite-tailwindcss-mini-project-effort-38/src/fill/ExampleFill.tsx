import React, { useState } from "react";

const ExampleFill: React.FC = () => {
  const [filledArray, setFilledArray] = useState<number[]>();
  const [filledString, setFilledString] = useState<string>("");

  const handleFillArray = () => {
    const originalArray = [1, 2, 3, 4, 5];
    const result = [...originalArray].fill(0, 1, 3);
    setFilledArray(result);
  };

  const handleFillString = () => {
    const sampleString = "hello";
    const charSample = Array.from(sampleString);
    const result = charSample.fill("*", 1, 4).join("");
    setFilledString(result);
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">
          ReactJS <code>.fill()</code> Example
        </h2>

        <button
          onClick={handleFillArray}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
        >
          Fill Array (with 0)
        </button>

        <button
          onClick={handleFillString}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Fill String (with '*')
        </button>

        <div className="mt-6">
          <p>
            <strong>Filled Array:</strong> {JSON.stringify(filledArray)}
          </p>
          <p>
            <strong>Filled String:</strong> {filledString}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleFill;
