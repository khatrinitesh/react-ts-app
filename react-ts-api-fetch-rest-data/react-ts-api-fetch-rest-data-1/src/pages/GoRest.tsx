import React, { useEffect, useState } from 'react'
// components
import Banner from '../components/Banner'
// interface
import { GoRestInterface } from '../interface/interface';
// library
import { Link } from 'react-router-dom';

const GoRest = () => {

  const [posts, setPosts] = useState<GoRestInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = import.meta.env.VITE_APP_API_URL_GOREST 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
        console.log(setPosts(data));
      } 
      catch (error: any) {
        setError(error.message);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const btnDelete =(id:number) => {
    const newData = posts.filter((val) => val.id !== id)
    setPosts(newData)
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='content'>
        <Banner title="GoRest" desc="Pariatur veniam ea laboris consectetur laborum excepteur tempor tempor ut laboris quis quis."/>
        <div className="container mx-auto">
        <h1 className='font-bold text-[32px]'>GoRest List</h1>
        <ul>
          {posts.length > 0 && (
            <>
              {posts.map(post => (
            <li key={post.id}>
              <Link to={`/gorest/${post.id}`} className='text-red-600 font-bold'>{post.id} - {post.name}</Link>
              <h3>{post.gender} - {post.status}</h3>
              <button onClick={() => btnDelete(post.id)}>&times;</button>
            </li>
          ))}
            </>
          )}
         
        </ul>
        </div>
    </div>
  )
}

export default GoRest