import apiClient from "./apiClient";
import { Post } from "../../types";

export const getPosts = async ():Promise<Post[]> => {
    const response = await apiClient.get('/posts');
    return response.data;
}

export const createPosts = async (post:Post):Promise<Post> => {
    const response = await apiClient.post('/posts',post);
    return response.data;
} 