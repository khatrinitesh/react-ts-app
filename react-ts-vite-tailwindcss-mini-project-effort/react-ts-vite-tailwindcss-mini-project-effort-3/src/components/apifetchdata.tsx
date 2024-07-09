import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Comment, Post } from '../interface/interface';
import { Link } from 'react-router-dom';

const ApiFetchDataComp = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [comments, setComments] = useState<Comment[]>([]);
    

    useEffect(() => {
        const fetchPostsAndComments = async () => {
            try {   
                const apiPUrl = import.meta.env.VITE_APP_POSTS;
                const apiCUrl = import.meta.env.VITE_APP_COMMENTS;
                if(!apiCUrl || !apiCUrl){
                    throw new Error('sorry something went wrong')
                }
             
                const postsPromise = axios.get<Post[]>(apiPUrl);
                const commentsPromise = axios.get<Comment[]>(apiCUrl);

                const [postsResponse, commentsResponse] = await Promise.all([postsPromise, commentsPromise]);

                setPosts(postsResponse.data);
                setComments(commentsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPostsAndComments();
    }, []);

  return (
    <>
         <h2 className='font-bold text-[32px]'>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            <br/>
            <hr/>
            <br/>
            <h2 className='font-bold text-[32px]'>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h3 className='font-bold'>{comment.name}</h3>
                        <p  className='text-[10px]'>{comment.body}</p>
                        <Link to={`mailto:${comment.email}`} className='text-[red] font-bold italic'>{comment.email}</Link>
                    </li>
                ))}
            </ul>
    </>
  )
}

export default ApiFetchDataComp