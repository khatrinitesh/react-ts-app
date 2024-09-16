import React from 'react';
import { useStore } from '../store/useStore';

const Counter = () => {
    const {count,increment,decrement} = useStore();
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Counter;
