import React, { useEffect, useState } from 'react'

const CustomApp = () => {
    const [item,setItem] = useState('');


    useEffect(() => {
        const savedItem = localStorage.getItem('myitem');
        if(savedItem){
            setItem(savedItem)
        }
    },[])

    const handleSave =() => {
        localStorage.setItem('myitem',item);
    }

    const handleRemove = () => {
        localStorage.removeItem('myitem')
        setItem('');
        
    }

  return (
    <div>
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder='enter something' />
        <button onClick={handleSave}>save to localstorage</button>
        <button onClick={handleRemove}>Remove from localStorage</button>
        <p>Saved Item: {item}</p>
        <p>{900 * 10}</p>   
    </div>
  )
}

export default CustomApp