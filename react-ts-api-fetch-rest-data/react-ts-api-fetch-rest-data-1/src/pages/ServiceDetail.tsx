import React,{ useEffect, useState } from 'react'
// library
import { useNavigate, useParams } from 'react-router-dom';
// interface
import { Post } from '../interface/interface';
// components
import Banner from '../components/Banner';


const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const API_URL = import.meta.env.VITE_APP_API_POSTS

    useEffect(() => {
        const fetchPost = async () => {
          try {
            const response = await fetch(`${API_URL}/${id}`);
            if (!response.ok) {
              throw new Error(`Network response was not ok ${response.status}`);
            }
            const data = await response.json();
            setPost(data);
          } catch (error: any) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchPost();
      }, [id]);

      const navigate = useNavigate();

      const btnBack =() => {
        navigate("/services")
      }


      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
  return (
    <>
    <Banner title="Service Detail" desc="Pariatur veniam ea laboris consectetur laborum excepteur tempor tempor ut laboris quis quis."/>
    
    <div className="container mx-auto border-t pt-2">
      <button onClick={btnBack} className='bg-cyan-300 rounded px-5 py-2'>Back</button>
     {post ? (
        <>
        
          <h1 className='font-bold text-[32px]'>{post.id} - {post.title}</h1>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Post not found</p>
      )}
      </div>
    </>
  )
}

export default ServiceDetail