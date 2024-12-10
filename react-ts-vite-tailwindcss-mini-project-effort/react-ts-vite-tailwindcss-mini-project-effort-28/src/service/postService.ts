
import { Post } from './../interface/index';

export const fetchData = async (url:string) => {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error(`error fetching data from ${url}:${response.status}`);
    }
    return response.json();
}

export const getPosts = async () => {
    return fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts')
}