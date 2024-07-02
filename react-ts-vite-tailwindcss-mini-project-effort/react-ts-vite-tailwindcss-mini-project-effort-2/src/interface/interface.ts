// TOP NAVIGATION
export interface NavItem {
    id: number;
    text: string;
    link: string;
  }

// BANNER
export interface BannerProps{
    bannerStyle:string;
    title:string;
    desc:string;
}

// POST
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// COMMENT
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}