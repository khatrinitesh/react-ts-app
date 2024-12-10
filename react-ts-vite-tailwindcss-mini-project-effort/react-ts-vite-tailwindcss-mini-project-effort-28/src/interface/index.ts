export interface TopNav{
    title:string;
    url:string;
}

export interface BannerProps{
    title:string;
    description:string;
    bannerStyle:React.CSSProperties
}

export interface Post{
    id:number,
    title:string,
    body:string
}