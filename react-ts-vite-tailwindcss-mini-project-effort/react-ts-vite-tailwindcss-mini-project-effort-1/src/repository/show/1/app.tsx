import React from 'react'

const CustomApp = () => {
    const user: User = {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
      };
    
  return (
    <>
     <UserInfo user={user}/>
    </>
  )
}

export default CustomApp

interface User{
    id:number;
    name:string;
    email:string;
}

const UserInfo:Rect.FC<{user:User}> = ({user}) => {
    return(
        <>
        <h2>User information</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>email: {user.email}</p>
        </>
    )
}