import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa'; // Using search icon from react-icons
import { useSearchStore } from '../store/store';

const AnimatedSearchComp:React.FC = () => {
    const { searchQuery, searchBarState, setSearchQuery, toggleSearchBar, resetSearch } = useSearchStore((state) => state);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
       <div className="search-container">
      {/* Toggle button for the search bar */}
      <button
        onClick={toggleSearchBar}
        className="toggle-search-button"
        aria-label="Toggle search"
      >
        <FaSearch />
      </button>

      {/* Animated Search Bar */}
      <motion.div
        className="search-bar-container"
        initial={{ width: 0 }}
        animate={{ width: searchBarState === 'open' ? '300px' : '0' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search..."
          className="search-input"
        />
        <button onClick={resetSearch} className="reset-button">
          X
        </button>
      </motion.div>
    </div>
    </>
  );
}

export default AnimatedSearchComp;
