import React, { useState } from "react";

const ExampleFlat: React.FC = () => {
  const [flatArray, setFlatArray] = useState<number[]>([]);
  const [flatString, setFlatString] = useState<string[]>([]);

  const nestedNumArray = [1, [2, 3], [4, [5, 6]]]; // deep nesting
  const nestedStringArray = [["H", "e"], ["l", "l"], ["o"]]; // character arrays

  const handleFlatten = () => {
    const flattenedNum = nestedNumArray.flat(2);
    setFlatArray(flattenedNum);
    const flattenedString = nestedStringArray.flat();
    setFlatString(flattenedString);
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">
          ReactJS <code>.flat()</code> Example
        </h2>

        <button
          onClick={handleFlatten}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Flatten Arrays
        </button>

        <div className="mt-6">
          <p>
            <strong>Original Number Array:</strong> [1, [2, 3], [4, [5, 6]]]
          </p>
          <p>
            <strong>Flattened:</strong> {JSON.stringify(flatArray)}
          </p>

          <p className="mt-4">
            <strong>Original String Nested Array:</strong> [['H','e'],
            ['l','l'], ['o']]
          </p>
          <p>
            <strong>Flattened:</strong> {JSON.stringify(flatString)}
          </p>
          <p>
            <strong>Joined String:</strong> {flatString.join("")}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleFlat;
