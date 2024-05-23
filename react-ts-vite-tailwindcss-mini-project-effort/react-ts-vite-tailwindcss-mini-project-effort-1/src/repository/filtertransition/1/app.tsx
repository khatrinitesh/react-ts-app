import React, { useState,useEffect } from 'react';
import './style.css';

const CustomApp = () => {
    const list:Item[] = [
        {id:1,name:'filtrationss',category:'Category1',salesman:'sachin'},
        {id:2,name:'braking system',category:'Category2',salesman:'rahul'},
        {id:3,name:'oil',category:'Category2',salesman:'sourav'},
        {id:4,name:'diesel',category:'Category3',salesman:'sachin'},
        {id:5,name:'automotive',category:'Category4',salesman:'rahul'},
        {id:6,name:'fuel',category:'Category4',salesman:'sourav'},
        {id:7,name:'dashboard',category:'Category5',salesman:'sourav'},
        {id:8,name:'C T Corporation C139',category:'Category6',salesman:'sachin'},
    ]
  return (
    <>
      <FilterTransition items={list} />
    </>
  );
};

export default CustomApp;

interface Item {
  id: number;
  name: string;
  category: string;
}

const FilterTransition: React.FC<{ items: Item[] }> = ({ items }) => {
    const [filterText, setFilterText] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  
    // Update filtered items when filter text changes
    React.useEffect(() => {
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase()) || item.category.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredItems(filtered);
    }, [filterText, items]);

    const handleFilterText = (e) => {
        setFilterText(e.target.value)
    }
  
    return (
      <div className="filter-transition-container">
        {/* Input field for filtering */}
        <input
          type="text"
          value={filterText}
          onChange={handleFilterText}
          placeholder="Filter by name"
        />
  
        {/* Display filtered items with transition */}
        <ul className="filter-transition-list">
          {filteredItems.map(item => (
            <li key={item.id} className="filter-transition-item">
              {item.name} - {item.category}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  