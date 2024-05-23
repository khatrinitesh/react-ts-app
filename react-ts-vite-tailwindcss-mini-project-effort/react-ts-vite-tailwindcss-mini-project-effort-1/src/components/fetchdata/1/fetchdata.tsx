import React, { useEffect, useState } from 'react'

interface UseData  {
    name:string,
    email:string,
    id:number
}

const UseFetchData = (url:string) => {

    const [listdata,setListdata] = useState<UseData[]>([])
    const [loading,setLoading] = useState<boolean>(true)
    const [error,setError] = useState<Error | null>(null)

    const fetchData = async () => {
        try {
            const response = await fetch(url)
            if(!response.ok){
                throw new Error('sorry something went wrong')
            }
            const result: UseData[] = await response.json()
            setListdata(result);
        } catch (error) {
            console.error('Error',error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    },[])
  return {listdata,error,loading}
}

export default UseFetchData