import React, { useState } from "react";

const CustomApp = () => {
  return (
    <>
      <SearchBarFilter />
    </>
  );
};

export default CustomApp;

type Item = {
    id: number;
    name: string;
  };

  // Define the type for the filter function
type FilterFunction = (searchTerm: string, items: Item[]) => Item[];


// Custom hook for filtering items based on a search term
const useSearchFilter = (filterFunction: FilterFunction) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  
    const handleSearch = (term: string) => {
      setSearchTerm(term);
      const filtered = filterFunction(term, items);
      setFilteredItems(filtered);
    };
  
    return { searchTerm, handleSearch, filteredItems };
  };
  
  // Sample filter function
  const filterItems: FilterFunction = (searchTerm, items) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  // Sample data
  const items: Item[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];
  
  const SearchBarFilter: React.FC = () => {
    const { searchTerm, handleSearch, filteredItems } = useSearchFilter(filterItems);
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => handleSearch(e.target.value)}
        />
        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  };