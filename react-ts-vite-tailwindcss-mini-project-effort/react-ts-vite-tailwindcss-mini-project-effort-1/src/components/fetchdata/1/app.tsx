import React, { useEffect, useState } from 'react'
import UseFetchData from './fetchdata'


const CustomApp = () => {
    const {listdata,loading,error} = UseFetchData('https://jsonplaceholder.typicode.com/users');
    const [deletedItem,setDeleteditem] = useState<number>([]);

    const btnDel  = (id:number) => {
        setDeleteditem(prevItem => [...prevItem,id]);
    }

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <div>{error.message}</div>
        )
    }
  return (
    <>
     <h2 className='font-bold text-[24px] underline'>User data 1:</h2>
     <ul>
     {listdata && listdata.map((val) => {
        if(deletedItem.includes(val.id)){
            return null
        }
        return (
            <li key={val.id}>
                Name: {val.name}, Email {val.email}
                <button onClick={() => btnDel(val.id)} className='bg-blue-600 text-white rounded p-[5px]'>Delete</button>
            </li>
        )
     })}
     </ul>
    </>
  )
}

export default CustomApp