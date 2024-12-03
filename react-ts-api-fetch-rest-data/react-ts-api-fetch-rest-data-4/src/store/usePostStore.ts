
import { create } from 'zustand';
import { fetchPosts } from '../apiFetchData/apiService';
import { PostStore } from './../interface/index';

export const usePostStore = create<PostStore>((set) => ({
    posts: [],
    loading: false,
    error: null,
    fetchPostsData: async () => {
        set({ loading: true, error: null });
        try {
        const posts = await fetchPosts();
        set({ posts, loading: false });
        } catch (error) {
        set({ error: error instanceof Error ? error.message : 'Unknown error', loading: false });
        }
    },
}))