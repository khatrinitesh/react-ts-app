import { HeaderLink, SelectOption } from "../interface/interface";

export const SELECT_OPTIONS:SelectOption[]= [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
]

export const headerLinks:HeaderLink[] = [
    { href: "/", navlink: "/home", label: "Home" },
    { href: "/about", navlink: "/about", label: "About" },
    { href: "/service", navlink: "/service", label: "Service" },
    { href: "/contact", navlink: "/contact", label: "Contact" },
]