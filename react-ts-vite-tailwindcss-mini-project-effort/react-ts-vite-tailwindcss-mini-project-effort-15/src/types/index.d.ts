export type BannerProps = {
    title:string;
    description:string;
}

export type BtnPrimaryProps = {
    title:string;
    onClick:() => void;
}

export type navLinks = {
    label:string;
    url:string;
}
export type InputFieldProps = {
    id: string;
    name: string;
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    maxLength?:number;
  }

  export type RouteError = {
    message?:string;
    status?:number;
  }

