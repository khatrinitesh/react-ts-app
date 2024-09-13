export type BannerTypes = {
    title:string;
    description:string;
}

export type HeaderTypes = {
    url:string;
    label:string;
}

export type BtnPrimaryTypes = {
    onClick:() => void;
    label:string;
}

export type User = {
    id:number;
    name:string;
    email:string;
}

export type Post = {
    id:number;  
    title:string;
    content:string;
}