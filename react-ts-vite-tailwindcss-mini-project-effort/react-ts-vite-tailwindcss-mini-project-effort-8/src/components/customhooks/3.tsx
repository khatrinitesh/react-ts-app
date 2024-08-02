import React, { useCallback, useState } from 'react';

const ChildComponent: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    console.log('Child rendered');
    return <button onClick={onClick}>Click me</button>;
  };

const CustomHooks = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = useCallback(() => {
        console.log('button clicked');
        
    })
  return (
    <div>
         <button onClick={() => setCount(count + 1)}>Increment Count</button><br />
         <ChildComponent onClick={handleClick}/>
    </div>
  )
}

export default CustomHooks

