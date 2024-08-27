import { HeaderProps } from "../interface";
import { Pathname } from "../interface/Pathname";

export const headerData:HeaderProps[] = [
    {
        label:'Home',
        url:Pathname.Home
    },
    {
        label:'About',
        url:Pathname.About
    },
    {
        label:'Service',
        url:Pathname.Service
    },
    {
        label:'Contact',
        url:Pathname.Contact
    },
]