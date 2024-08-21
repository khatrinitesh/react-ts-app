import React, { useState } from 'react';
import { SearchBar } from '../../../../interface';



const SearchBarComp:React.FC<SearchBar> = ({onSearch}) => {
    const [query,setQuery] = useState<string>('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    }
  return (
    <>
     <form onSubmit={handleSubmit} className='mb-4'>
        <input type="text" value={query} onChange={handleChange} placeholder='Search...' className='mb-4 border p-2' />
        <br />
        <button className='bg-black text-white px-5 py-2 rounded-[10px]' type="submit">submit</button>
     </form>
    </>
  )
}

export default SearchBarComp

