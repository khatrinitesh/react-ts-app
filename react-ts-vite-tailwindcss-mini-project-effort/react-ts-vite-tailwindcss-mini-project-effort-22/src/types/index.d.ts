export type BannerProps = {
    title:string;
    description:string;
}

export type BtnPrimaryProps = {
    onClick:() => void;
    label:string;
}

export type HeaderProps = {
    label:string;
    url:string;
}

export type StoreState = {
    count:number;
    increment:() => void;
    decrement:() => void;
}

export type UserTypes = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
}

export type StoreState = {
    users:UserTypes[];
    loading:boolean;
    error:string | null;
    fetchUsers:() => Promise<void>;
    deleteUser:(id:number) => void;
}