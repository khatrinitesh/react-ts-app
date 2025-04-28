export interface BannerProps{
    children:React.ReactNode;
    bannerStyle:React.CSSProperties;
}

export interface topNavProps{
    linkUrl:string;
    label:string;
}

export interface Post{
    id:number;
    title:string;
    body:string;
}