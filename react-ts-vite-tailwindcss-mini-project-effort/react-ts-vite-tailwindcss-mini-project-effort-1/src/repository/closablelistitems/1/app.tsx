import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <div>
      <ClosableListItem/>
    </div>
  )
}

export default CustomApp


const ClosableListItem:React.FC = () => {
    const [items,setItems] = useState<string[]>(['item1','item2','item3']);

    const toggleItem = (index:number) => {
        setItems(prevItems => {
            const newItems = [...prevItems];
            newItems.splice(index,1); // remove item at index
            return newItems;
        });
    };
    return(
        <>
        <div>
            {items.map((item,index) => (
                <div key={index} className='flex justify-between items-center bg-gray-200 p-2 mb-2'>
                    <p>{item}</p>
                    <button className="text-red-500"  onClick={() => toggleItem(index)}>Close</button>
                </div>
            ))}
        </div>
        </>
    )
}

