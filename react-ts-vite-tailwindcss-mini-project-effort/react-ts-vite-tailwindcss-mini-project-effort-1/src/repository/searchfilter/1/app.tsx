import React, { useState, useEffect } from "react";

const CustomApp = () => {
    const items = [
        {id:1,name:'happy'},
        {id:2,name:'smile'},
        {id:3,name:'sad'},
        {id:4,name:'mood'},
    ];
  return (
    <>
     <SearchFilter items={items}/>
    </>
  )
};

export default CustomApp;

type Item = {
  id: number;
  name: string;
};

const SearchFilter: React.FC<{ items: Item[] }> = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItem, setFilterdItem] = useState<Item[]>([]);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterdItem(filtered);
  }, [searchTerm, items]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredItem.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};
