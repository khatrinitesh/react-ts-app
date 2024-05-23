import React, { useState,useEffect } from 'react';

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
      <FilterTable items={list} />
    </>
  );
};

export default CustomApp;

interface Item {
  id: number;
  name: string;
  category: string;
}

const FilterTable: React.FC<{ items: Item[] }> = ({ items }) => {
    const [filterText, setFilterText] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<Item[]>(items);
  
    // Update filteredItems when filterText changes
    useEffect(() => {
      const filtered = items.filter(item =>item.name.toLowerCase().includes(filterText.toLowerCase()) || item.category.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredItems(filtered);
    }, [filterText, items]);
  
    return (
      <div>
        {/* Input field for filtering */}
        <input
          type="text"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          placeholder="Filter by name"
        />
  
        {/* Display table with filtered items */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  