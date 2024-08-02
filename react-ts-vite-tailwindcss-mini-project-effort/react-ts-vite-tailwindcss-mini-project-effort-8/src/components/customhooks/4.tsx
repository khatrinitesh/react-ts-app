import React, { useState } from 'react'

const CustomHooks = () => {

    const [count,setCount] = useState<number>(0)

    const btnHandle = () => {
        setTimeout(() => {
            setCount(count => count + 1)
        },1000)
    }
  return (
    <div>
        {count}
        <button onClick={btnHandle}>Click</button>
    </div>
  )
}

export default CustomHooks