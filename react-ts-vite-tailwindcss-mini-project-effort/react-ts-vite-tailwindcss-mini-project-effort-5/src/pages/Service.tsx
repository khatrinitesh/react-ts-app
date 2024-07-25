import React, { useEffect, useState } from 'react'
import Banner from '../layout/Banner'
import { PostProps } from '../interface/interface'
import { Link } from 'react-router-dom';

const Service:React.FC = () => {
  const [posts,setPosts] = useState<PostProps[]>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState(null);
  const apiurl = import.meta.env.VITE_APP_API1

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiurl)
      if(!response.ok){
        throw new Error('sorry something went wrong')
      }
      const finalResult = await response.json()
      setPosts(finalResult)
      setLoading(false);
      console.log(finalResult);
      
    } catch (error) {
      console.error(error.message)
    }
  };

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className='content'>
        <div className="container mx-auto">
            <Banner title="Service" description='Consectetur sunt deserunt officia ex deserunt commodo ad sit.'/>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {posts.length > 0 && (
              <>
              {posts.map((val) => (
                <div key={val.id} className='shadow p-2 rounded'>
                  <Link to={`/service/${val.id}`}>{val.id}</Link>
                  <h3 className='font-bold text-[32px]'>{val.title}</h3>
                  <p className='text-[16px]'>{val.body}</p>
                </div>
              ))}
              </>
            )}
        </div>
    </div>
  )
}

export default Service