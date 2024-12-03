import React, { useEffect } from 'react';
import { usePostStore } from '../store/usePostStore';
import { Link } from 'react-router-dom';

const PostListComp = () => {

    const {loading,error,posts,fetchPostsData} = usePostStore();
    

    useEffect(() => {
        fetchPostsData()
    },[fetchPostsData]);

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    if(error){
        return(
            <div>Error: {error}</div>
        )
    }
  return (
    <>
      <div className='container mx-auto'>
        {posts.map((post) => (
            <div key={post.id}>
                <Link to={`/productlist/${post.id}`}>
                <h3 className='font-bold text-[32px]'>{post.title}</h3>
                <p>{post.body}</p>
                </Link>
            </div>
        ))}
      </div>
    </>
  );
}

export default PostListComp;
