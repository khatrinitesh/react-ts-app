import { HeaderProps } from "../interface";
import { Pathname } from "../interface/Pathame";

export const NavLinks:HeaderProps[] = [
    {
        url:Pathname.Home,
        label:'Home'
    },
    {
        url:Pathname.About,
        label:'About'
    },
    {
        url:Pathname.Service,
        label:'Service'
    },
    {
        url:Pathname.Contact,
        label:'Contact'
    },
]