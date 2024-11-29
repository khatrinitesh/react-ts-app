export interface BannerProps{ 
    title:string;
    description:string;
    bannerStyle:React.CSSProperties;
}

export interface TopNavProps{
    link:string;
    label:string;
}

export interface AccordionItem{
    id:string;
    title:string;
    body:string;
}