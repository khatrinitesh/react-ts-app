import React, { useState } from "react";

const ExamplePush:React.FC = () => {
  const [fruits, setFruits] = useState<string[]>(["apple", "banana"]);
  const [newFruit, setNewFruit] = useState<string>("");
  const [pushResult, setPushResult] = useState<number>(null);

  const handleAddFruit = (): void => {
    if (newFruit.trim() === '') return;

    // Create a copy of the current array to avoid mutation
    const fruitsCopy: string[] = [...fruits];

    // Push the new fruit and capture the new array length
    const result: number = fruitsCopy.push(newFruit);

    // Update state
    setFruits(fruitsCopy);
    setPushResult(result);
    setNewFruit('');
  };
  return (
    <>
      <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h2>React TypeScript Example – <code>push()</code></h2>

      <input
        type="text"
        value={newFruit}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewFruit(e.target.value)}
        placeholder="Enter fruit name"
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />

      <button onClick={handleAddFruit} style={{ padding: '0.5rem 1rem' }}>
        Add Fruit
      </button>

      <div style={{ marginTop: '1rem' }}>
        <p><strong>Fruits Array:</strong> {JSON.stringify(fruits)}</p>
        <p><strong>New Length after Push:</strong> {pushResult ?? '-'}</p>
      </div>
    </div>
    </>
  )
}

export default ExamplePush;