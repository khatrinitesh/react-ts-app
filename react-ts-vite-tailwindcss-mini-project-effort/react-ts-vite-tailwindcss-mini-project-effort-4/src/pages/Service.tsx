import React, { useEffect, useState } from 'react'
import Banner from '../layout/Banner'
import { PostProps } from '../interface/interface';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Service = () => {
  const apiurl = import.meta.env.VITE_APP_API1
  const [posts,setPosts] = useState<PostProps>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true); 
      const response = await axios.get<PostProps[]>(apiurl);
      setPosts(response.data);
      setLoading(false); 
    } catch (error) {
      setError(`Sorry, something went wrong: ${error.message}`);
      setLoading(false); 
    }
  };
  useEffect(() => {
    fetchData()
  },[]);

  const btnDel = async (id: number) => {
    try {
      setLoading(true);
      // Make DELETE request to API endpoint to delete the item
      await axios.delete(`${apiurl}/${id}`);
      // Update state by filtering out the deleted item
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
      setLoading(false);
    } catch (error) {
      setError(`Sorry, something went wrong: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <div className=''>
        <Banner title='Service' desc='In ipsum Lorem magna eu non exercitation sit in exercitation ad.'/>
        <div className="container mx-auto">
        {loading ? (<><p>Loading..</p></>) : error ? (<><p>{error}</p></>) :  (
          <>
           <h2 className='font-bold text-[32px] mb-6'>Service List Data:</h2>
           <ul>
            {posts.map((item) => (
              <li key={item.id} className='mb-6 shadow p-5 rounded-2'>
                <Link to={`/service/${item.id}`}>
                <strong>Id:</strong> {item.id} 
                <br />
                <strong>userId:</strong> {item.userId}
                <br />
                <strong>Title:</strong> {item.title}
                </Link>
                <button className='bg-black text-white px-2 py-2 rounded' onClick={() => btnDel(item.id)}>Delete</button>
                </li> 
            ))}
          </ul>
          </>
        )}
        </div>
    </div>
  )
}

export default Service