export interface BannerProps{
    title:string;
    description:string;
}

export interface navDataProps{
    url:string;
    label:string;
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ButtonProps{
    children:React.ReactNode;
    onClick:() => void;
}