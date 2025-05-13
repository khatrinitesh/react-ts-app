import React, { useState } from "react";

const ExamplePop = () => {
  const [fruits, setFruits] = useState<string[]>(["apple", "banana", "mango"]);
  const [removedFruit, setRemovedFruit] = useState<string>(null);

  const sampleText = "HelloWorld";
  const sampleNumber = 987654;

  const handlePop = () => {
    const fruitsCopy = [...fruits];
    const removed = fruitsCopy.pop() | null;

    setFruits(fruitsCopy);
    setRemovedFruit(removed);
  };
  return (
    <>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">
          ReactJS <code>.pop()</code> Example
        </h2>

        <button
          onClick={handlePop}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Pop Last Fruit
        </button>

        <div className="mt-6 space-y-4">
          <p>
            <strong>Fruits Array:</strong> {JSON.stringify(fruits)}
          </p>
          <p>
            <strong>Popped Fruit:</strong> {removedFruit ?? "-"}
          </p>

          <hr className="my-4" />

          <p>
            <strong>String:</strong> "{sampleText}" → Without last char: "
            {sampleText.slice(0, -1)}"
          </p>
          <p>
            <strong>Number:</strong> {sampleNumber} → Without last digit:{" "}
            {Math.floor(sampleNumber / 10)}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExamplePop;
