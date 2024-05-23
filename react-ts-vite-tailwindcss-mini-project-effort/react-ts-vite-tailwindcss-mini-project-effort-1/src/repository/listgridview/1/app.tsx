import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
    const items: Item[] = [
        { id: 1, name: 'Item 1', description: 'Description for Item 1' },
        { id: 2, name: 'Item 2', description: 'Description for Item 2' },
        { id: 3, name: 'Item 3', description: 'Description for Item 3' },
        // Add more items as needed
      ];
  return (
    <>
        <ListView items={items}/>
    </>
  )
};

export default CustomApp;

// define the type for the item in the list
interface Item {
  id: number;   
  name: string;
}

// define the props for the list component
interface ListProps {
  items: Item[];
}

// define the state for the list component
interface ListState {
  isGridView: boolean;
}

const ItemComp: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

const ListView:React.FC<ListProps> = ({items}) => {
    return(
        <>
          <h2>List/Grid View</h2>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {items.map(item => (
                <ItemComp key={item.id} item={item}/>
            ))}
          </div>
        </>
    )
}
