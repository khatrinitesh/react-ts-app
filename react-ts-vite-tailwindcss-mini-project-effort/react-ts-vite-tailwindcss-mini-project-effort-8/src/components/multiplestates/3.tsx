import React, { useState } from 'react'
import { ItemData } from '../../constants/constants'

const MultipleStates:React.FC = () => {
    const [selectedID,setSelectedID] = useState<number | null>(null);

    const handleSelected = (id:number) => {
        setSelectedID(id);
    }

    const isSelected = (id:number) => id === selectedID
  return (
    <>
    <ul>
        {ItemData.map((val) => (
            <li key={val.id} onClick={() => handleSelected(val.id)} className={`${isSelected(val.id) ? 'bg-red-200' : 'bg-transparent'}`}>
                {val.name}
            </li>
        ))}
    </ul>
    </>
  )
}

export default MultipleStates