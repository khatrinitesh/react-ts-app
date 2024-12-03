import { PostProps } from "../interface";


const apiurl = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = async ():PromisePost<PostProps[]> => {
    const response = await fetch(apiurl);
    if(!response.ok){
        throw new Error('failed to fetch posts');
    }
    return response.json();
}