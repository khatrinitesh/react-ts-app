import React, { useCallback, useEffect, useState } from 'react';
import { usePostStore } from '../store/usePostStore';

const PostList: React.FC = () => {
  const { post, isLoading, error, fetchPosts } = usePostStore((state) => ({
      post: state.post,
      isLoading: state.isLoading,
      error: state.error,
      fetchPosts: state.fetchPosts,
  }));

  useEffect(() => {
      if (post.length === 0 && !isLoading) {
          fetchPosts();
      }
  }, [post.length, isLoading, fetchPosts]);

  if (isLoading) {
      return <p>Loading posts...</p>;
  }

  if (error) {
      return <p>Error: {error}</p>;
  }

  return (
      <ul>
          {post.map((postItem) => (
              <li key={postItem.id}>
                  <h3>{postItem.title}</h3>
                  <p>{postItem.body}</p>
              </li>
          ))}
      </ul>
  );
};

export default PostList;
