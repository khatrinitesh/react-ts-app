import React, { useEffect } from 'react';
import { useAutoCompleteStore } from '../store/store';
import { motion } from 'framer-motion';


interface AutoCompleteProps {
    data: string[];
  }
const Autocomplete:REact.FC<AutoCompleteProps> = ({data}) => {
    const { query, setQuery, suggestions, setSuggestions } = useAutoCompleteStore(); // Zustand store hooks

    useEffect(() => {
      if (query) {
        const filtered = data.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered); // Update the suggestions based on query
      } else {
        setSuggestions([]); // If no query, clear suggestions
      }
    }, [query, data, setSuggestions]); // Trigger useEffect when query or data changes
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query in Zustand store
        placeholder="Search..."
        className="p-2 border"
      />
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-2 p-0"
      >
        {suggestions.length > 0 ? (
          suggestions.map((item, index) => (
            <motion.li
              key={index}
              className="p-2 border-b cursor-pointer"
              whileHover={{ scale: 1.1 }} // Hover animation with Framer Motion
            >
              {item}
            </motion.li>
          ))
        ) : (
          <motion.li className="p-2 text-gray-500">No suggestions</motion.li>
        )}
      </motion.ul>
    </>
  );
}

export default Autocomplete;
