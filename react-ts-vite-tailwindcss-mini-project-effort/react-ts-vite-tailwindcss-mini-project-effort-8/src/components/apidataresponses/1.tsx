import React, { useEffect, useState } from 'react'
import { User } from '../../interface/interface'

const APIDataResponses = () => {

    const [users,setUsers] = useState<User[]>([]);
    const [loading,setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
        });
    },[]);


    if(loading){
        return(
            <>
            <p>Loading...</p></>
        )
    }
  return (
    <>
    <ul>
        {users.map((user => (
            <li key={user.id}>
                {user.name}
            </li>
        )))}
    </ul>
    </>
  )
}

export default APIDataResponses