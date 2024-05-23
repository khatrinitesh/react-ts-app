import React, { useEffect, useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <UserList/>
    </>
  )
}

export default CustomApp

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const baseapiurl = 'https://jsonplaceholder.typicode.com/users';
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch(`${baseapiurl}`);
          if (!response.ok) {
            throw new Error('sorry something went wrong');
          }
          const data: User[] = await response.json();
          setUsers(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchUsers();
    }, []);
  
    const deleteUser = (id: number) => {
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
    };
  
    return (
      <>
        <h2>Users List</h2>
        <ul>
          {users.map(user => (
            <UserApp key={user.id} user={user} onDelete={deleteUser} />
          ))}
        </ul>
      </>
    );
  };
  
  interface UserProps {
    user: User;
    onDelete: (id: number) => void;
  }
  
  const UserApp: React.FC<UserProps> = ({ user, onDelete }) => {
    const { id, name, email } = user;
  
    return (
      <li>
        <h3 className='font-bold text-[24px]'>{name}</h3>
        <a className="text-red-600 font-bold" href={`mailto:${email}`}>
          {email}
        </a>
        <button onClick={() => onDelete(id)}>&times;</button>
      </li>
    );
  };