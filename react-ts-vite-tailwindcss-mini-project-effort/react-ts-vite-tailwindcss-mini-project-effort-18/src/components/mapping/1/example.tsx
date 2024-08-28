import React from 'react';
import { User } from '../../../types';

const users:User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
]

const Example:React.FC = () => {
  return (
    <div>
      <UserList/>
    </div>
  )
}

export default Example

const UserList:React.FC = () => {

    return(
        <>
         <h1>user list</h1>
         <ul>
            {users.map((val) => (
                <li key={val.id}>
                    <p>Name: {val.name}</p>
                    <p>Email: {val.email}</p>
                </li>
            ))}
         </ul>
        </>
    )
}
