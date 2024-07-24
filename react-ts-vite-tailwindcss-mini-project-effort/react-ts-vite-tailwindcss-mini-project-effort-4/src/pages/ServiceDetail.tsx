import React, { useEffect, useState } from 'react'
import Banner from '../layout/Banner'
import { PostProps } from '../interface/interface';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const apiurl = import.meta.env.VITE_APP_API1

  const navigate = useNavigate();
  const [posts, setPost] = useState<PostProps | null>(null); 
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const {id} = useParams<{id:number}>();

  const btnBack = () => {
    navigate("/service")
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<PostProps>(`${apiurl}/${id}`); // Fetch single post by id
      setPost(response.data); // Set single post to state
      setLoading(false);
    } catch (error) {
      setError(`Sorry, something went wrong: ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when id changes
  }, [id]); // Dependency on id ensures useEffect runs when id changes

  return (
    <div className=''>
        <Banner title='Service' desc='In ipsum Lorem magna eu non exercitation sit in exercitation ad.'/>
        <div className="container mx-auto">
        <button onClick={btnBack}  className='bg-black text-white px-2 py-2 rounded'>Back</button>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : posts ? ( // Check if post exists before rendering
          <>
            <h2 className='font-bold text-3xl mb-6'>Service Detail Data:</h2>
            <p>{posts.title} - {posts.body}</p> {/* Render post title and body */}
          </>
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  )
}

export default ServiceDetail