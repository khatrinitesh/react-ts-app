import React, { useState } from 'react';
import UseFetchData from './fetchdata';

const CustomApp = () => {
    const { listdata, loading, error } = UseFetchData('https://jsonplaceholder.typicode.com/users');
  const [deletedItems, setDeletedItems] = useState<number[]>([]);

  const handleDelete = (id: number) => {
    setDeletedItems(prevItems => [...prevItems, id]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-[30px]">User Data:1</h1>
      <ul>
        {listdata.map(user => {
          if (deletedItems.includes(user.id)) {
            return null; // Skip rendering if item is marked as deleted
          }
          return (
            <li key={user.id}>
              Name: {user.name}, Email: {user.email}
              <button onClick={() => handleDelete(user.id)} className="bg-blue-700 text-white rounded p-[5px]">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomApp