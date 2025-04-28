import React, { useEffect } from "react";
import usePostStore from "./../store/usePostStore";

const PostComponent:React.FC = () => {
    const { posts, fetchPosts, loading, error } = usePostStore((state) => ({
      posts: state.posts,
      fetchPosts: state.fetchPosts,
      loading: state.loading,
      error: state.error,
    }));
  
    // Trigger fetchPosts only once on mount
    useEffect(() => {
      fetchPosts();
    }, [fetchPosts]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="border-b py-4">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </>
    );
  };

export default PostComponent;
