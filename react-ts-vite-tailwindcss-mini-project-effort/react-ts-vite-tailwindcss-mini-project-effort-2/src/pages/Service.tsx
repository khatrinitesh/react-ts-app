import React, { useEffect, useState } from 'react';
// COMPONENTS
import Banner from '../components/Banner';
// INTERFACE
import { Comment, Post } from '../interface/interface';
import { useNavigate } from 'react-router-dom';

const Service:React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const btnNext = () => {
    navigate('/service1');
  }

  useEffect(() => {
    const fetchPostsAndComments = async () => {
      try {
        setLoading(true);
        const [postsResponse, commentsResponse] = await Promise.all([
          fetch(import.meta.env.VITE_APP_POSTS as string),
          fetch(import.meta.env.VITE_APP_COMMENTS as string)
        ]);

        if (!postsResponse.ok || !commentsResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        const postsData: Post[] = await postsResponse.json();
        const commentsData: Comment[] = await commentsResponse.json();
        setPosts(postsData);
        setComments(commentsData);
        console.log(import.meta.env.VITE_APP_POSTS);
        console.log(import.meta.env.VITE_APP_COMMENTS);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchPostsAndComments();
  }, []);

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    return (
      <div>Error: {error}</div>
    );
  }

  return (
    <div className='content'>
      <Banner title='Service' desc="Velit incididunt nostrud sunt incididunt incididunt voluptate laborum adipisicing labore ipsum voluptate enim in ea." />
      <button className='bg-black text-white rounded px-10 py-2' onClick={btnNext}>Next</button>
      <div className='container px-4 mx-auto'>
      <h2 className='font-bold text-[32px] text-[red]'>Service List</h2>
        <h2 className='font-bold text-[24px]'>Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <h2 className='font-bold text-[24px]'>Comments</h2>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Service;
