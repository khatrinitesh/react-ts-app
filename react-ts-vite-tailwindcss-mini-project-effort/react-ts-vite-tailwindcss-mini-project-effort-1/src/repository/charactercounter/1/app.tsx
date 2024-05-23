import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
      <CharacterCounter/>
    </>
  )
}

export default CustomApp

const CharacterCounter:React.FC = () => {
    const [text,setText] = useState<string>('');
    const maxLength = 6

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputVal = e.target.value 
        if(inputVal.length <= 10){
            setText(inputVal)
        }
    }
    return(
        <>
            <h2>Character Counter</h2>
            <input type="text" onChange={handleChange} value={text} placeholder="Type something..."
 />
            <p>Character Count: {text.length}</p>
            {text.length <= maxLength ? (<><p>Valid</p></>) : (<><p>Invalid</p></>)}
        </>
    )
}
