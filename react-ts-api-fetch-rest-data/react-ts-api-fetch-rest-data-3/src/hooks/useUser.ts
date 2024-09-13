import { useState, useEffect } from 'react';
import { getUsers } from '../api/services/userService';
import { User } from '../types';

const UseUser= () => {
    const [users,setUsers] = useState<User[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userList = await getUsers();
                setUsers(userList);
            } catch (error) {
                console.error('error fetching users',error)
            }
            finally{
                setLoading(false);
            }
        }
        fetchUser()
    },[]);

    return {users,loading}

}
export default UseUser;