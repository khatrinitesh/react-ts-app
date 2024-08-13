export type ButtonProps = {
    onClick:() => void;
    children:React.ReactNode;
    className?:string;
}
export type InputField ={
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=> void;
    placeholder?:string;
    type?:string;
}