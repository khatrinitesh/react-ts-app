import React, { useMemo, useState } from 'react'

const CustomHooks = () => {
    const [count, setCount] = useState<number>(0);
  return (
    <div>
 <button onClick={() => setCount(count + 1)}>Increment Count</button>
 <ExpensiveComp count={count}/>
    </div>
  )
}

export default CustomHooks

const ExpensiveComp:React.FC<{count:number}> = ({count}) => {
    const expensiveValue = (num:number) => {
        console.log('computing expensive value');
        return num * 2
    }

    const expensiveValueComp = useMemo(() => expensiveValue(count),[count]);

    return <div>{expensiveValueComp}</div>
}

