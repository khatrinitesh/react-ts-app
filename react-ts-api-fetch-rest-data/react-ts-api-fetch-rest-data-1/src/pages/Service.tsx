import React, { useEffect, useState } from 'react'
// components
import Banner from '../components/Banner'
// interface
import { Post } from '../interface/interface';
// library
import { Link } from 'react-router-dom';

const Service = () => {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = import.meta.env.VITE_APP_API_POSTS

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
        <Banner title="Service" desc="Pariatur veniam ea laboris consectetur laborum excepteur tempor tempor ut laboris quis quis."/>
        <h1 className='font-bold text-[32px]'>Service List</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/services/${post.id}`} className='text-red-600 font-bold'>{post.id} - {post.title}</Link>
              <button onClick={() => btnDelete(post.id)}>&times;</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Service