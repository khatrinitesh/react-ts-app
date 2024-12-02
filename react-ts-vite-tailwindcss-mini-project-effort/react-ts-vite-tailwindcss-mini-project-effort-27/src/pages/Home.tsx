import React from 'react';
import { usePosts } from '../utils/usePosts';
import { usePostStore } from '../store/store';
import AnimatedSearchComp from '../components/AnimatedSearchComp';

const Home:React.FC = () => {

    // const { data, isLoading, error } = usePosts(); // Fetch posts with Tanstack Query
    // const { posts } = usePostStore(); // Get the posts from Zustand store
  
    // // Display loading state
    // if (isLoading) return <div>Loading...</div>;
  
    // // Display error if the fetch failed
    // if (error instanceof Error) return <div>Error: {error.message}</div>;
  return (
    <>
       <h1 className='text-red-500 text-[20px]'>Search Animation with Framer Motion</h1>
       <AnimatedSearchComp/>
      {/* <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <li>No posts available</li> // This will be displayed if no posts exist
        )}
      </ul> */}
    </>
  );
}

export default Home;
