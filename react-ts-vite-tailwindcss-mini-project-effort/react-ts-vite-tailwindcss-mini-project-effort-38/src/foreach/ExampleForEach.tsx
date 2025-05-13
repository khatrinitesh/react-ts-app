import React, { useState } from 'react';

const ExampleForEach:React.FC = () => {
    const [numberOutput,setNumberOutput] = useState<string[]>();
    const [stringOutput,setStringOutput] = useState<string[]>();

    const numberArray = [1,2,3,4,5]
    const sampleString = 'hello';

    const handleForEach = () => {
        const numberMsg:string[]= [];
        const charMsg:string[] =[];
        numberArray.forEach((num,index) => {
            numberMsg.push(`INdex ${index}: ${num * 2}`)
        })

        Array.from(sampleString).forEach((char,index) => {
            charMsg.push(`Char at ${index}: ${char.toUpperCase()}`)
        })

        setNumberOutput(numberMsg)
        setStringOutput(charMsg)
    }
  return (
    <>
     <div className="p-6">
      <h2 className="text-xl font-bold mb-4">ReactJS <code>.forEach()</code> Example</h2>

      <button
        onClick={handleForEach}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Run forEach()
      </button>

      <div className="mt-6">
        <h3 className="font-semibold">Number Array Output:</h3>
        <ul className="list-disc ml-6">
            {numberOutput?.map((item,i) => {
                return(
                    <li key={i}>{item}</li>
                )
            })}
        </ul>
        <h3 className="font-semibold">String Output:</h3>
        <ul className='list-disc ml-6'>
            {stringOutput?.map((item,i) => {
                return(
                    <li key={i}>{item}</li>
                )
            })}
        </ul>
        </div>
        </div> 
    </>
  );
}

export default ExampleForEach;
