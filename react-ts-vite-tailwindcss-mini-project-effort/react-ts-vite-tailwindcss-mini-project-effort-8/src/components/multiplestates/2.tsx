import React, { useState } from 'react'

// Refactor to a Single State Object

const MultipleStates:React.FC = () => {

    const [userInfo,setUserInfo] = useState<UserInfo>(
        {name:'',age:'',email:''},
    )

    const handleChange = (e:React.ChangeEventHandler<HTMLInputElement>) => {
        const {name,value} = e.target;
        setUserInfo((prevState) => ({
            ...prevState,
            [name]:name === 'age' ? Number(value) : value
        }))
    }

  return (
    <>
        <input type="text"
        value={userInfo.name}
        name="name"
        onChange={handleChange}
        placeholder='Name' />
        <input type="number"
        value={userInfo.age}
        name="age"
        onChange={handleChange}
        placeholder='Age' />
        <input type="email"
        value={userInfo.email}
        name="email"
        onChange={handleChange}
        placeholder='email' />
    </>
  )
}

export default MultipleStates