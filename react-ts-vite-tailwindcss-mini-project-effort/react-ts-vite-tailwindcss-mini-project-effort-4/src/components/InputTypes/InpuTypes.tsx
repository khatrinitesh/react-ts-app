import React, { HTMLInputTypeAttribute, useState } from 'react'

const InpuTypes = () => {
  return (
    <>
    <ColorInputExample/>
    <hr/>
    <DateInputExample/>
    <hr/>
    <URLInputExample/>
    </>
  )
}

export default InpuTypes

const URLInputExample:React.FC = () => {
    const [url,setUrl] = useState<string>('');

    const handleUrlChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    }
    return(
        <>
        <label htmlFor="urlInput">Enter a URL:</label>
        <input type="url" value={url} onChange={handleUrlChange} id='urlInput' />
        <p>Entered URL: {url}</p>
        </>
    )
}

const DateInputExample:React.FC  = () => {
    const [selectedDate,setSelectedDate] = useState<string>('');

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value)
    }
    return(
        <>
        <label htmlFor="fieldDate">Select a date:</label>
        <input type="date" id='fieldData' value={selectedDate} onChange={handleChange} />
        <p>Seleced Date: {selectedDate}</p>
        </>
    )
}

const ColorInputExample = () => {

    const [color,setColor] = useState('#000000');

    const handleColorChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    }

    return(
        <>
        <label htmlFor="colorPicker">Choose a color:</label>
        <input id="colorPicker" type="color" value={color} onChange={handleColorChange} />
        <div style={{width:'100px',height:'100px',backgroundColor:color}}></div>
        {color}
        </>
    )
}