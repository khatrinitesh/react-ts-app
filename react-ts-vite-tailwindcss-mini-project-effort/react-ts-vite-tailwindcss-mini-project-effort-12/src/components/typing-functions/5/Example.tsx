import React, { useState } from 'react';

const Example:React.FC = () => {


   
  return (
    <>
        <ListComp  />
    </>
  )
}

export default Example

type CountNumber = number;
  

const ListComp:React.FC = () => {

    const [count,setCount] = useState<CountNumber>(0);

    const btnIncmrent =() => {
        setCount(prevCount => prevCount + 1)
    }
    return(
        <>
         <button onClick={btnIncmrent}>+</button>
         <br/>
         {count}
        </>
    )
}