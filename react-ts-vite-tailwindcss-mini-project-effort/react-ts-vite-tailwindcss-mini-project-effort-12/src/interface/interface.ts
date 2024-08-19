export type BannerProps = {
    title:string;
    desc:string;
    className:string;
}

export type HeaderProps = {
    title:string;
    url:string;
}

export type ButtonPrimaryProps ={
    onClick:() => void;
    title:string;
}

// Define a type for the error object
export type RouteError ={
    statusText?: string;
    message: string;
  }
  