import React, { useState } from 'react';
import { AnimatedSearchProps } from '../interface/interface';
import { searchStyles } from '../constants/constants';


const AnimatedSearchComp:React.FC<AnimatedSearchProps> = ({placeholder="Search...",onSearch }) => {
    const [query, setQuery] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(query);
        }
    };
  return (
    <>
         <input
            type="text"
            className={searchStyles.base}
            placeholder={placeholder}
            value={query}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    </>
  )
}

export default AnimatedSearchComp