import React, { useState } from 'react'
import { Item } from '../../../types'
import { FILTER_CATEGORIES } from '../../../constants/constants'
import { FilterItem } from './utils'

const initialItem:Item[] = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Carrot', category: 'Vegetable' },
  { id: 3, name: 'Banana', category: 'Fruit' },
]

const Example:React.FC = () => {
  const [selectCategory,setSelectedCategory] = useState<string>(FILTER_CATEGORIES.ALL);
  const [items] = useState<Item[]>(initialItem);

  const filteredItems = FilterItem(items,selectCategory);
  return (
    <>
      <h1>Item List</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectCategory}>
        {Object.values(FILTER_CATEGORIES).map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> 
    </>
  )
}

export default Example


