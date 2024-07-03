import React, { useEffect, useState } from 'react'
import { Albums, Comment, Post } from '../interface/interface';
import { Link, useNavigate } from 'react-router-dom';
import TodoListComp from '../components/todo/1';
import styled from 'styled-components';

const BtnDelete = styled.button`
    background-color: black;
    color: white;
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #333;
    }
`;

const Service1:React.FC = () => {

    const [posts,setPosts] = useState<Post[]>([]);
    const [comments,setComments] = useState<Comment[]>([]);
    const [albums,setAlbums] = useState<Albums[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/service")
    }

    useEffect(() => {
        const fetchPostsAndComments = async () => {
            try{
                setLoading(true);
                const [postsResponse,commentsResponse,albumsResponse]  = await Promise.all([
                    fetch(import.meta.env.VITE_APP_POSTS as string),
                    fetch(import.meta.env.VITE_APP_COMMENTS as string),
                    fetch(import.meta.env.VITE_APP_ALBUMS as string)
                ]);
                
                if(!postsResponse.ok || !commentsResponse.ok || !albumsResponse.ok){
                    throw new Error('Failed to fetch data');
                }
                const postsData: Post[] = await postsResponse.json();
                const commentsData: Comment[] = await commentsResponse.json();
                const albumsData: Albums[] = await albumsResponse.json();
                setPosts(postsData);
                setComments(commentsData);
                setAlbums(albumsData);
                console.log(import.meta.env.VITE_APP_POSTS);
                console.log(import.meta.env.VITE_APP_POSTS);
                console.log(import.meta.env.VITE_APP_ALBUMS);

            }
            catch(error){
                setError((error as Error).message);
            }
            finally{
                setLoading(false);
            }
        }
        fetchPostsAndComments();
    },[]);

    const btnDelete  = (id:number) => {
        const newData = posts.filter((post) => post.id !== id)
        setPosts(newData)
    }

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
        <h1 className='font-bold text-[24px] text-[red]'>Service List with Link</h1>
        <button onClick={btnBack} className='bg-black text-white px-10 py-2 rounded'>Back</button>
        {/* <TodoListComp/> */}
        <ul>
        {posts.map((post => (
            <li key={post.id}>
                <Link to={`/servicedetail/${post.id}`} className='italic '>{post.id}</Link> -  {" "}
                {post.title}
                <BtnDelete onClick={() => btnDelete(post.id)}>Delete</BtnDelete>
            </li>
        )))}
        </ul>
        <hr />
        <h1 className='font-bold text-[24px]'>Comments</h1>
        <ul>
        {comments.map((comment => (
            <li key={comment.id} className='flex gap-1'>
                <Link to={`/servicedetail/${comment.id}`} className='italic '>{comment.id}</Link> -  {" "}
                <h3 className='font-bold text-[blue]'>{comment.name} - {comment.email}</h3>
            </li>
        )))}
        </ul>
        <hr />
        <h1 className='font-bold text-[24px]'>Albums</h1>
        <ul>
        {albums.map((album => (
            <li key={album.id} className='flex gap-1'>
                <Link to={`/servicedetail/${album.id}`} className='italic '>{album.id}</Link> -  {" "}
                <h3 className='font-bold text-[red]'>{album.title}</h3>
            </li>
        )))}
        </ul>
    </>
  )
}

export default Service1