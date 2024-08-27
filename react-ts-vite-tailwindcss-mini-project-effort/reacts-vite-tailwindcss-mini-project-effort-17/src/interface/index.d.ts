export type BtnPrimaryProps= {
    onClick:() => void;
    title:string;
}

export type BannerProps={
    title:string;
    desc:string;
}

export type HeaderProps={
    label:string;
    url:string;
}

export type PostProps={
    id:number;
    title:string;
    body:string;
}
export type UserProps={
    id:number;
    name:string;
    username:string;
}

export type InputFieldProps = {
    name: string;
    id?: string; // id is optional
    disabled?: boolean; // disabled is optional
    maxlength?: number; // maxlength is optional
    error?: string; // error message is optional
    autocomplete?: string; // autocomplete is optional
    placeholder?: string; // placeholder is optional
    value?: string; // value is optional, but often used
    onChange?: React.ChangeEventHandler<HTMLInputElement>; // onChange is optional
  }

  export type Student = {
    id: number;
    name: string;
    age: number;
    grade: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  }

  export type StudentGridProps = {
    students:Student[]
  }

  export type StudentTileProps = {
    student: Student;
    onEdit: (id: number) => void;
    onFlag: (id: number) => void;
    onDelete: (id: number) => void;
  }