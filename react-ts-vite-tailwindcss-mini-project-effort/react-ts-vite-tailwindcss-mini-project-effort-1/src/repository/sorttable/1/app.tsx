import React, { useState } from 'react';
import { react } from '@vitejs/plugin-react';

const CustomApp = () => {
  return (
    <>
        <SortTable/>
    </>
  )
}

export default CustomApp


interface Item{
    id:number;
    name:string;
    age:number;
}

const SortTable:React.FC = () => {
    const [items,setItems] = useState<Item[]>([
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Alice', age: 25 },
        { id: 3, name: 'Bob', age: 35 },
    ]);

   const sortItemsByName = () => {
    const sortedItems  = [...items].sort((a,b) => a.name.localeCompare(b.name));
    setItems(sortedItems )
   }

      const sortItemsByAge = () => {
        const sortedItems = [...items].sort((a, b) => b.age - a.age);
        setItems(sortedItems);
      };
    return(
        <>
         <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sortable Table</h2>
      <table className="table-auto border-collapse border w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2" onClick={sortItemsByName}>
              Name
            </th>
            <th className="border px-4 py-2" onClick={sortItemsByAge}>
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
    )
}