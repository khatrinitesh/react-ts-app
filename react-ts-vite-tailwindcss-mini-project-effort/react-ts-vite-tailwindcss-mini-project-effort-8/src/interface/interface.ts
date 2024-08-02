export const HeaderProps[
    text:string;
    url:string;
]

export interface BannerProps{
    title:string;
    description:string;
}

export interface BtnPrimaryProps{
    label:string;
    onClick:() => void;
}

export interface CardProps {
    title: string;
    children: React.ReactNode;
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  export interface AuthContextType {
    isAuthenicated:boolean;
    login:() => void;
    logout:() => void;
  }

  export interface User {
    id: number;
    name: string;
  }

  export interface ModalProps{
    isOpen:boolean;
    onClose:() => void;
    children:React.ReactNode;
  }

  export interface ChildCompProps{
    value:string;
    onValueChange:(newValue:string) => void;
    onBtnClick:() => void;
  }

  export interface UserInfo{
    name:string;
    age:number;
    email:string;
  }

  export interface ItemProps{
    id:number;
    name:string;
  }

  export interface OptionProps{
    id:number;
    name:string;
  }

  export interface FilterParams{
    category?:string;
    search?:string;
  }