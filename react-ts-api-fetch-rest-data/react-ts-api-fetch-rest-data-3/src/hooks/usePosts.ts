import React,{useState,useEffect} from 'react';
import { getPosts } from '../api/services/postService';
import { Post } from '../types';
import apiClient from '../api/services/apiClient';

const usePost = () => {

  const [posts,setPosts] = useState<Post[]>([]);
  const [loading,setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postList = await getPosts();
        setPosts(postList)
      } catch (error) {
        console.error('error fetching posts',error)
      }
      finally{
        setLoading(false);
      }
    };
    fetchPost();
  },[]);

  return {posts,loading}
}

export default usePost;
