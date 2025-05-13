import React, { useState } from 'react';

const ExampleConcat:React.FC = () => {
   // arrays 
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];

    // strings 
     const string1 = "Hello, ";
  const string2 = "World!";


  // state to show results
  const [result,setResult] = useState({
    array:[] as number[],
    string:''
  });

  const handleConcat = () => {
    const newArray = array1.concat(array2);
    const newString = string1.concat(string2)
    setResult({
      array:newArray,
      string:newString
    });
  };
  return (
    <>
      <div className="p-4">
      <h2 className="font-bold text-xl mb-2">ReactJS concat() Example</h2>

      <button
        onClick={handleConcat}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Concatenate Array and String
      </button>

      <div className="mt-4">
        <p><strong>Merged Array:</strong> {JSON.stringify(result.array)}</p>
        <p><strong>Merged String:</strong> {result.string}</p>
      </div>
    </div> 
    </>
  );
}

export default ExampleConcat;


