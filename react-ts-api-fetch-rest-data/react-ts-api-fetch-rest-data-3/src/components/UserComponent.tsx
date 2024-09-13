import React from 'react';
import { User } from '../types';

interface UserComponentProps {
    user:User;
}

const UserComponent:React.FC<UserComponentProps> = ({user}) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default UserComponent;
