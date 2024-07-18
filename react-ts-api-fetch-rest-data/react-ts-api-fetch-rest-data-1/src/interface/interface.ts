export interface GoRestInterface{
  id:number;
  name:string;
  email:string;
  gender:string;
  status:string;
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

export interface HeaderProps{
    link:string;
    label:string;
}
