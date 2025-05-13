import React, { useState } from 'react';

const ExampleCopyWithin:React.FC = () => {
    const initialArray = [10, 20, 30, 40, 50];
    const [originalArray,setOriginalArray] = useState(initialArray);
    const [modifiedArray,setModifiedArray] = useState<number[]>([]);

    const handleCopyWithin = () => {
        const copied = [...originalArray]; // clone to avoid mutating state directly
        const result = copied.copyWithin(1,3); // copy from index 3 to 1 onward (40 → index 1, 50 → index 2)
        setModifiedArray([...result])
    }
  return (
    <>
      <div className="p-4">
      <h2 className="font-bold text-xl mb-2">ReactJS copyWithin() Example</h2>

      <p><strong>Original Array:</strong> {JSON.stringify(originalArray)}</p>

      <button
        onClick={handleCopyWithin}
        className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Apply copyWithin
      </button>

      {modifiedArray.length > 0 && (
        <div className="mt-4">
          <p><strong>Modified Array:</strong> {JSON.stringify(modifiedArray)}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default ExampleCopyWithin;
