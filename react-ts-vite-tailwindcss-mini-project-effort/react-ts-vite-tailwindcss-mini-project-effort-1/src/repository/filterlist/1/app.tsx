import React, { useState } from 'react';

const CustomApp = () => {
    const list:Item[] = [
        {id:1,name:'filtration',category:'Category1',salesman:'sachin'},
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
      <FilteredList items={list} />
    </>
  );
};

export default CustomApp;

interface Item {
  id: number;
  name: string;
  category: string;
}

const FilteredList: React.FC<{ items: Item[] }> = ({ items }) => {
    const [filterText, setFilterText] = useState<string>('');
  
    // Filter the items based on the filter text
    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(filterText.toLowerCase()));
  
    return (
      <div>
        {/* Input field for filtering */}
        <input
          type="text"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          placeholder="Filter by name"
        />
  
        {/* Display filtered items */}
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name} - {item.category}</li>
          ))}
        </ul>
      </div>
    );
  };