import React, { useCallback, useEffect } from "react";
import { useUserStore  as apiUsers } from "../store/apiUsers";

const UserList: React.FC = () => {
    // Retrieve state and actions from Zustand store
    const store = apiUsers();
    
    if (!store) {
        return <div>Error: Store is not available.</div>;
    }

    const { users = [], error = null, loading = false, fetchUsers = () => {}, deleteUser = () => {} } = store;

    const fetchUsersCallback = useCallback(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleDelete = useCallback((id: number) => {
        deleteUser(id);
    }, [deleteUser]);

    useEffect(() => {
        fetchUsersCallback();
    }, [fetchUsersCallback]);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    if (users.length === 0) return <div>No users found.</div>;

    return (
        <>
            {users.map((user) => (
                <div className="card p-[10px] mb-2 shadow rounded-[5px]" key={user.id}>
                    <h2><strong>Name:</strong> {user.name}</h2>
                    <h3><strong>Username:</strong> {user.username}</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button onClick={() => handleDelete(user.id)}>Remove</button>
                </div>
            ))}
        </>
    );
};
  
export default UserList;
