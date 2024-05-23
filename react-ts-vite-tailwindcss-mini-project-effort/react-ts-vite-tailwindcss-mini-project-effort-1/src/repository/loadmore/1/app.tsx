import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
    const items: ListItem[] = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' },
        { id: 11, name: 'Item 11' },
        { id: 12, name: 'Item 12' },
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
    const [visibleItems, setVisibleItems] = useState<number>(3); // Initial number of items to display
  
    const loadMore = () => {
        setVisibleItems(prevItem => prevItem + 1)
    }
  
    return (
      <div>
        <h2>List </h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.slice(0, visibleItems).map(item => (
            <ListItemComponent key={item.id} item={item} />
          ))}
        </ul>
        {visibleItems < items.length && (
            <button onClick={loadMore}>
                Load more <span className="font-bold">{visibleItems}</span>
            </button>
        )}
      </div>
    );
  };
  