import React, { useState } from "react";

const ExampleEvery: React.FC = () => {
  const [numberResult, setNumberResult] = useState<boolean | null>(null);
  const [stringResult, setStringResult] = useState<boolean | null>(null);

  const numberArray = [2, 4, 6, 8];
  const sampleString = "HELLO";

  const handleCheckEvery = () => {
    const areAllEven = numberArray.filter((num) => num % 2 === 0);


    const charArray = Array.from(sampleString)
    const areAllUppercase = charArray.every((char) => char === char.toUpperCase());

    setNumberResult(areAllEven);
    setStringResult(areAllUppercase);
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          ReactJS <code>.every()</code> Example
        </h2>

        <button
          onClick={handleCheckEvery}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Check Conditions with .every()
        </button>

        <div className="mt-4">
          <p>
            <strong>Number Array:</strong> {JSON.stringify(numberArray)}
          </p>
          <p>
            ✅ Are all numbers even? —{" "}
            <span className="font-semibold text-green-700">
              {numberResult === null
                ? "Click to check"
                : numberResult
                ? "Yes"
                : "No"}
            </span>
          </p>
        </div>
        <p className="mt-4">
          <strong>String:</strong> "{sampleString}"
        </p>
        <p>
          ✅ Are all characters uppercase? —{" "}
          <span className="font-semibold text-green-700">
            {stringResult === null
              ? "Click to check"
              : stringResult
              ? "Yes"
              : "No"}
          </span>
        </p>
      </div>
    </>
  );
};

export default ExampleEvery;
