import React, { useState } from "react";

const ExampleIncludes: React.FC = () => {
  const [arrayResult, setArrayResult] = useState<boolean>(false);
  const [stringResult, setStringResult] = useState<boolean>(false);
  const [numberInArrayResult, setNumberInArrayResult] = useState<boolean>(false);

  const fruits = ["apple", "banana", "mango"];
  const sampleText = ["Welcome to React!"];
  const numberwise = [10, 20, 30, 40, 50];

  const handleCheckIncludes = () => {
    const checkArray = fruits.includes("banana");
    const checkString = sampleText.includes("React");
    const checkNum = numberwise.includes(25);

    setArrayResult(checkArray);
    setStringResult(checkString);
    setStringResult(checkNum);
  };

  return (
    <>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">
          ReactJS <code>.includes()</code> Example
        </h2>

        <button
          onClick={handleCheckIncludes}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Check .includes()
        </button>

        <div className="mt-6 space-y-4">
          <p>
            <strong>Fruits Array:</strong> {JSON.stringify(fruits)}
          </p>
          <p>
            🔎 Includes 'banana'? →{" "}
            <strong>
              {arrayResult !== null ? arrayResult.toString() : "-"}
            </strong>
          </p>

          <p>
            <strong>Text:</strong> "{sampleText}"
          </p>
          <p>
            🔎 Includes 'React'? →{" "}
            <strong>
              {stringResult !== null ? stringResult.toString() : "-"}
            </strong>
          </p>

          <p>
            <strong>Number Array:</strong> {JSON.stringify(numberwise)}
          </p>
          <p>
            🔎 Includes 25? →{" "}
            <strong>
              {numberInArrayResult !== null
                ? numberInArrayResult.toString() : "-"}
            </strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleIncludes;
