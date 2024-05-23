import React,{ useEffect, useState } from "react";

const CustomApp = () => {
  return (
    <>
      <CenteredTabled/>
    </>
  )
}

export default CustomApp

interface TableData {
    id:number;
    name:string;
    username:string;
    email:string;
}

const CenteredTabled:React.FC<TableData> = () => {

    const [tabledata,setTabledata] = useState<TableData[]>([])
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          if(!response.ok){
            throw new Error('sorry something went wrong')
          }
          const data = await response.json();
          console.log(data)
          setTabledata(data)
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      }
      fetchData()
    },[])


    return(
        <>
    {loading ? (
      <p>Loading...</p>
    ):(
      <>
      <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {tabledata.map((val, index) => {
      const { id, name, email, username } = val;
      return (
        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
          <td className="px-6 py-4 whitespace-nowrap">{id}</td>
          <td className="px-6 py-4 whitespace-nowrap">{name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{username}</td>
          <td className="px-6 py-4 whitespace-nowrap">{email}</td>
        </tr>
      )
    })}
  </tbody>
</table>

      </>
    )}
        </>
    )
}