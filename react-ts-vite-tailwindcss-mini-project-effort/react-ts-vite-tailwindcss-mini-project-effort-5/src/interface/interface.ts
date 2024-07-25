export interface PostProps{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export interface BannerProps{
    title:string;
    description:string;
}

export interface BtnPrimaryProps{
    label:string ;
    onClick:() => void;
}

export interface HeaderProps{
    label:string;
    href:string;
}

export interface SocialMediaLink{
    href:string;
    label:string;
}