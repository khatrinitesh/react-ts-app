import React, { useState } from 'react'
import BtnPrimary from '../Button/BtnPrimary';

const FunctionHooks = () => {
    const [count,setCount] = useState<number>(0);
  return (
    <>
        <p>Count: {count}</p>
        <BtnPrimary onClick={() => setCount(count => count + 1)}>Increment {count}</BtnPrimary>
    </>
  )
}

export default FunctionHooks