export interface BannerProps{
import { fetchPosts } from './../apiFetchData/apiService';
    title:string;
    description:string;
    bannerStyle:React.CSSProperties;
}

export interface TopNavProps{
    title:string;
    url:string;
}

export interface HeadTitleProps{
    children:ReactNode;
    headStyle:React.CSSProperties;
}

export interface PostProps{
    id:number;
    title:string;
    body:string;
}

export interface PostStore {
    posts:PostProps[];
    loading:boolean;
    error:string | null;
    fetchPostsData:() => void;
}