import React, { useState } from 'react';

const ExampleFind:React.FC = () => {
     const [foundNumber, setFoundNumber] = useState<number | undefined>(undefined);
  const [foundChar, setFoundChar] = useState<string | undefined>(undefined);

  const numberArray = [5, 12, 8, 130, 44];
  const sampleString = "ReactJS";

  const handleFind = () => {
        // Find first number greater than 10
        const resultNumber = numberArray.find(num => num > 10);

        // Convert string to array and find first vowel
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const resultChar = [...sampleString].find(char => vowels.includes(char.toLowerCase())
    );

    setFoundNumber(resultNumber);
    setFoundChar(resultChar);
  };
  return (
    <>
     <div className="p-4">
      <h2 className="text-xl font-bold mb-4">ReactJS <code>.find()</code> Example</h2>

      <button
        onClick={handleFind}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Find Elements
      </button>

      <div className="mt-6">
        <p><strong>Number Array:</strong> {JSON.stringify(numberArray)}</p>
        <p>🔎 First number &lt; 10: <span className="font-semibold">{foundNumber ?? 'Not found'}</span></p>

        <p className="mt-4"><strong>String:</strong> "{sampleString}"</p>
        <p>🔎 First vowel: <span className="font-semibold">{foundChar ?? 'Not found'}</span></p>
      </div>
    </div>
    </>
  );
}

export default ExampleFind;
