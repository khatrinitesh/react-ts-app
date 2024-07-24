export interface SelectOptionProps{
    value:string;
    label:string;
}

export interface PostProps{
    userId:number;
    id:number;
    title:string;
    body:string;
}

export interface BannerProps {
    title:string;
    desc:string;
}
export interface HeaderLink {
    href:string;
    navLink:string;
    label:string;
}