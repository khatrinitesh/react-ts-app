import { ItemProps } from "../interface/interface";

export const headerData:HeaderProps[] = [
    {text:'Home',url:'/'},
    {text:'About',url:'/about'},
    {text:'Service',url:'/service'},
    {text:'Contact',url:'/contact'},
]
// Define API endpoints
export const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
// Define some hard-coded values
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_RETIRES = 3;
// Define UI-related constants
export const BUTTON_TXT_SUBMIT =   'Submit';
export const BUTTON_TXT_CANCEL =  'Cancel';

export const ItemData:ItemProps[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
]

export const OptionData:OptionProps[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
]

export const categories = [
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Furniture' },
]


export const items = [
    { id: '1', category: 'Electronics', name: 'Laptop' },
    { id: '2', category: 'Electronics', name: 'Smartphone' },
    { id: '3', category: 'Furniture', name: 'Chair' },
    { id: '4', category: 'Furniture', name: 'Table' },
]