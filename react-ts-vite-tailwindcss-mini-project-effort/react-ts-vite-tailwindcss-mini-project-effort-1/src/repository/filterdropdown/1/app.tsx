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
      <FilterDropdown items={list} />
    </>
  );
};

export default CustomApp;

interface Item {
  id: number;
  name: string;
  category: string;
  salesman:string;
}

const FilterDropdown: React.FC<{ items: Item[] }> = ({ items }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valuelist = event.target.value
      setSelectedCategory(valuelist);
    };
  
    const filteredItems = selectedCategory === 'All' ? items : items.filter(item => item.category === selectedCategory);
  
    return (
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Category1">Category1</option>
          <option value="Category2">Category2</option>
          <option value="Category3">Category3</option>
          <option value="Category4">Category4</option>
          <option value="Category5">Category5</option>
          <option value="Category6">Category6</option>
        </select>
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name} - {item.category} - {item.salesman}</li>
          ))}
        </ul>
      </div>
    );
  };

