import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
    const items: ListItem[] = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
      ];

      
      const handleItemClick = (id: number) => {
        console.log(`Item with id ${id} clicked`);
        // Do something when an item is clicked
      };
  return (
    <>
        <ListGroup items={items} onItemClick={handleItemClick}/>
    </>
  )
};

export default CustomApp;

// Define the type for the item in the list group
interface ListItem {
    id: number;
    name: string;
  }

  // Define the props for the component
interface ListGroupProps {
    items: ListItem[];
    onItemClick: (id: number) => void;
  }

  // Functional component for rendering each item in the list group
const ListItemComponent: React.FC<{ item: ListItem; onItemClick: (id: number) => void }> = ({ item, onItemClick }) => {
    const handleClick = () => {
      onItemClick(item.id);
    };
  
    return (
      <button type="button" onClick={handleClick} style={{ display: 'block', margin: '5px', padding: '10px', border: '1px solid #ccc' }}>
        {item.name}
      </button>
    );
  };

  // Functional component for rendering the list group
const ListGroup: React.FC<ListGroupProps> = ({ items, onItemClick }) => {
    return (
      <div>
        <h2>List Group</h2>
        <div>
          {items.map(item => (
            <ListItemComponent key={item.id} item={item} onItemClick={onItemClick} />
          ))}
        </div>
      </div>
    );
  };    