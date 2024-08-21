export type BtnPrimaryProps ={
    label:string;
    onClick:() => void;
}

export type BannerProps ={
    title:string;
    desc:string;
}

export type HeaderProps ={
    url:string;
    label:string;
}

export type PostProps = {
    id:number;
    title:string;
    body:string;
}

export type CardProps = {
    title:string;
    content?:string; // optional props
}

export type ContainerProps = {
    children:React.ReactNode;
}

export type GreetingProps = {
    name:string;
    age?:number; // optional prop
}

export type ClickableButtonProps = {
    onClick:(event:React.MouseEvent<HTMLButtonElement>) => void;
    label:string;
}

export type Address = {
    street:string;
    city:string;
}

export type UserProfileProps = {
    name:string;
    address:Address;
    hobbies:string[];
}

export type Product = {
    name: string;
    price: number;
    inStock: boolean;
}

export type SearchBar = {
    onSearch:(query:string) => void;
}