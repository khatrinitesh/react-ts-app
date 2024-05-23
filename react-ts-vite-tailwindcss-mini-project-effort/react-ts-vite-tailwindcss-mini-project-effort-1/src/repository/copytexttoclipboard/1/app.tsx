import React, { useState } from "react";

const CustomApp = () => {
  return (
    <div>
        <Clipboard/>
    </div>
  )
}

export default CustomApp

const Clipboard:React.FC = () => {
    const [text,setText] = useState<string>('Copy this text');

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('text copied to clipboard')
        },(err) => {
          console.error('Failed to copy text: ',err);
        })
    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setText(e.target.value)
    }
    return(
        <>
        <h1>Copy Text to Clipboard Example</h1>
        <textarea value={text} onChange={handleChange} rows={4} cols={50}/>
        <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
        </>
    )
}