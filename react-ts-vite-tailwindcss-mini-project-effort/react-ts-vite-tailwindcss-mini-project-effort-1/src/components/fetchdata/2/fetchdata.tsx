import React, { useEffect, useState } from 'react';

interface UserData{
    id:number;
    name:string;
    email:string;
}

const UseFetchData = (url:string) => {
    const [listdata,setListdata] = useState<UserData[]>([]);
    const [loading,setLoading] = useState<boolean>(true);
    const [error,setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('failed to fetch data')
                }
                const result: UserData[] = await response.json();
                setListdata(result);
            } catch (error) {
                setError(error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData()
    },[])
  return {listdata,loading,error}
}

export default UseFetchData