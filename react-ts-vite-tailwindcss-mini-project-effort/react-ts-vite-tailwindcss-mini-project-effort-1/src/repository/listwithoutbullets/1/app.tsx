import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
    const items: ListItem[] = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
      ];
  return (
    <>
        <ListComponent items={items}/>
    </>
  )
};

export default CustomApp;

// Define the type for the item in the list
interface ListItem {
    id: number;
    name: string;
  }
  
  // Define the props for the component
  interface ListProps {
    items: ListItem[];
  }
  
  // Functional component for rendering each item in the list
  const ListItemComponent: React.FC<{ item: ListItem }> = ({ item }) => {
    return (
      <li style={{ margin: '5px 0', padding: '5px', border: '1px solid #ccc' }}>
        {item.name}
      </li>
    );
  };

  // Functional component for rendering the list
const ListComponent: React.FC<ListProps> = ({ items }) => {
    return (
      <div>
        <h2>List without Bullets</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.map(item => (
            <ListItemComponent key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  };