import { create } from 'zustand';
import { Post } from '../interface/index';

interface PostStore {
  posts: Post[];
  loading: boolean;
  error: string | null;
  setPosts: (posts: Post[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  fetchPosts: () => void;
}

const usePostStore = create<PostStore>((set, get) => ({
  posts: [],
  loading: false,
  error: null,
  setPosts: (posts) => set({ posts }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  fetchPosts: async () => {
    const { loading, posts } = get(); // Get current state

    // Prevent fetching if loading is true or posts are already available
    if (loading || posts.length > 0) {
      return;
    }

    set({ loading: true, error: null }); // Set loading to true when the request starts
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data: Post[] = await response.json();
      set({
        posts: data,
        loading: false, // Set loading to false once data is fetched
      });
    } catch (error) {
      console.error('Error fetching posts', error);
      set({
        loading: false,
        error: 'Failed to fetch posts. Please try again later.',
      });
    }
  },
}));

export default usePostStore;
