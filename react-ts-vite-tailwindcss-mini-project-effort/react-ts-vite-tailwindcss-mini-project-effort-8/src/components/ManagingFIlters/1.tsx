import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FilterParams } from '../../interface/interface';
import { items } from '../../constants/constants';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const ManagingFilters = () => {

    const query = useQuery();
    const navigate = useNavigate();

    const [category, setCategory] = useState<string>(query.get('category') || '');
    const [search, setSearch] = useState<string>(query.get('search') || '');
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        const params: FilterParams = {};
        if (category) params.category = category;
        if (search) params.search = search;

        // Update URL with the current filters
        navigate({ search: new URLSearchParams(params).toString() });

        // Filter items based on category and search term
        const filtered = items.filter(item => {
            const matchesCategory = category ? item.category.toLowerCase() === category.toLowerCase() : true;
            const matchesSearch = search ? item.name.toLowerCase().includes(search.toLowerCase()) : true;
            return matchesCategory && matchesSearch;
        });

        setFilteredItems(filtered);
    }, [category, search, navigate]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

  return (
    <> 
    <select value={category} onChange={handleCategoryChange}>
    <option value="">All Categories</option>
    <option value="Electronics">Electronics</option>
    <option value="Furniture">Furniture</option>
</select>
<input
    type="text"
    value={search}
    onChange={handleSearchChange}
    placeholder="Search..."
/>
<div>
    {filteredItems.length > 0 ? (
        <ul>
            {filteredItems.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    ) : (
        <p>No items found</p>
    )}
</div>
    </>
  )
}

export default ManagingFilters