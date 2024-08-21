import React from 'react'
import { UserProfileProps } from '../../../../interface'

const Example:React.FC<UserProfileProps> = ({hobbies,name,address}) => {
  return (
    <>
    <div>
        <h3>{name}</h3>
        <ul>
            {hobbies.map((val,index) => (
                <li key={index}>{val}</li>
            ))}
        </ul>
        <p>street - {address.street}</p>
        <p>city - {address.city}</p>
    </div>  
    </>
  )
}

export default Example