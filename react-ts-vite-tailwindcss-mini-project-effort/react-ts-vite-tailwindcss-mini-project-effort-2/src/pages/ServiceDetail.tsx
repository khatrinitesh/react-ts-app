import React, { useEffect, useState } from 'react'
import { Albums, Comment, Post } from '../interface/interface';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail:React.FC = () => {

    const [posts,setPosts] = useState<Post[]>([]);
    const [comments,setComments] = useState<Comment[]>([]);
    const [albums,setAlbums] = useState<Albums[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);
    const {id} = useParams<{id:string}>();
    const navigate = useNavigate();
    const btnBack = () => {
        navigate('/service1')
    }

    useEffect(() => {
        const fetchPostsAndComments = async () => {
            try {
                setLoading(true);
                const [postsResponse, commentsResponse, albumsResponse] = await Promise.all([
                    fetch(`${import.meta.env.VITE_APP_POSTS}/${id}`),
                    fetch(`${import.meta.env.VITE_APP_COMMENTS}/${id}`),
                    fetch(`${import.meta.env.VITE_APP_ALBUMS}/${id}`)
                ]);
    
                if (!postsResponse.ok || !commentsResponse.ok || !albumsResponse.ok) {
                    throw new Error('Failed to fetch data');
                }
    
                const postsData: Post[] = await postsResponse.json();
                const commentsData: Comment[] = await commentsResponse.json();
                const albumsData: Albums[] = await albumsResponse.json();
    
                setPosts(postsData);
                setComments(commentsData);
                setAlbums(albumsData);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchPostsAndComments();
    }, [id]);
    

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
        <h1 className='font-bold text-[24px]'>Final Result</h1>
        <button onClick={btnBack} className='bg-black text-white px-10 py-2 rounded'>Back</button>
        <h2 className='font-bold text-[32px] text-[red]'>Posts</h2>
        {posts.id} - {posts.title}
        <hr/>
        <h2 className='font-bold text-[32px] text-[red]'>Comments</h2>
        {comments.id} - {comments.name}
        <hr/>
        <h2 className='font-bold text-[32px] text-[red]'>Albums</h2>
        {albums.id} - {albums.title}
    </>
  )
}

export default ServiceDetail