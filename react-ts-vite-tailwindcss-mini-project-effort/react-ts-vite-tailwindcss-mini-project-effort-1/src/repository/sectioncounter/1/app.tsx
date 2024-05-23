import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
        <h1>Counter App</h1>
        <Counter initialValue={5} />
    </>
  )
}

export default CustomApp

// Define the props type for the Counter component
interface CounterProps {
    initialValue?: number; // Optional prop
  }

  const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
    // Define the state for the counter
    const [count, setCount] = useState<number>(initialValue);
  
    // Function to increment the count
    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };
  
    // Function to decrement the count
    const decrement = () => {
      setCount((prevCount) => prevCount - 1);
    };
  
    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };

