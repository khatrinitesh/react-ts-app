
import { create } from 'zustand';
import { Post } from './../interface/index';
import { getPosts } from '../service/postService';

interface PostStore {
    post: Post[];
    isLoading: boolean;
    error: string | null;
    fetchPosts: () => Promise<void>;
}

export const usePostStore = create<PostStore>((set) => ({
    post: [],
    isLoading: false,
    error: null,
    fetchPosts: async () => {
        set({ isLoading: true, error: null });
        try {
            const data = await getPosts();
            set({ post: data, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch posts', isLoading: false });
            console.error('Failed to fetch posts:', error);
        }
    },
}));