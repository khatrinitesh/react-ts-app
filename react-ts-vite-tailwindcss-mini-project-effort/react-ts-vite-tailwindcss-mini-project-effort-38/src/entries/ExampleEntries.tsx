import React, { useState } from 'react';

const ExampleEntries:React.FC = () => {
 const numberArray = [100, 200, 300];
  const sampleString = "Hi!";

  const [arrayEntries, setArrayEntries] = useState<[number, number][]>([]);
  const [stringEntries, setStringEntries] = useState<[number, string][]>([]);

  const handleShowEntries = () => {
     // Proper use of .entries() on number array
    const arrayResult = [...numberArray.entries()];
 // Convert string to character array before using .entries()
    const stringAsArray = Array.from(sampleString);
    const stringResult = [...stringAsArray.entries()];

    setArrayEntries(arrayResult);
    setStringEntries(stringResult);
  };
  return (
    <>
       <div className="p-4">
      <h2 className="text-xl font-bold mb-2">ReactJS <code>.entries()</code> Example</h2>

      <button
        onClick={handleShowEntries}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Show Array & String Entries
      </button>

      <div className="mt-4">
        <p><strong>Array:</strong> {JSON.stringify(numberArray)}</p>
        <p><strong>Array Entries:</strong></p>
         <ul className="list-disc ml-6">
          {arrayEntries.map(([index, value]) => (
            <li key={index}>Index {index} → Value {value}</li>
          ))}
        </ul>

        <p className="mt-4"><strong>String:</strong> "{sampleString}"</p>
        <p><strong>String Entries:</strong></p>
        <ul className="list-disc ml-6">
          {stringEntries.map(([index, char]) => (
            <li key={index}>Index {index} → Char '{char}'</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default ExampleEntries;
