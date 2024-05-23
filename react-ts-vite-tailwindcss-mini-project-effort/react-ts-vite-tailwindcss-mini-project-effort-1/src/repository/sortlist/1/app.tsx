import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
        <SortableList/>
    </>
  )
}

export default CustomApp

interface Item{
    id:number;
    name:string;
}

const SortableList:React.FC = () => {

    const [items,setItems] = useState<Item>([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' },
    ]);

    const handleDragState = (e:React.DragEvent<HTMLElement>) => {
        e.dataTransfer.setData('index',index.toString());
    };

    const handleDragOver = (e:React.DragEvent<HTMLElement>) => {
        e.preventDefault();
    }

    const handleDrop = (e: React.DragEvent<HTMLLIElement>, targetIndex: number) => {
        const sourceIndex = Number(e.dataTransfer.getData('index'));
        const newItems = [...items];
        const [removedItem] = newItems.splice(sourceIndex, 1);
        newItems.splice(targetIndex, 0, removedItem);
        setItems(newItems);
      };
    return(
        <>
        <ul>
      {items.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item.text}
        </li>
      ))}
    </ul>
        </>
    )
}