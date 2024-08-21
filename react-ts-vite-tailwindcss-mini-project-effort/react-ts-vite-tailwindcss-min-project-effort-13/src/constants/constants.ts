import { HeaderProps, Product, UserProfileProps } from "../interface";

export const HeaderData:HeaderProps[] = [
    {
        url:"/",
        label:'Home'
    },
    {
        url:"/about",
        label:'About'
    },
    {
        url:"/service",
        label:'Service'
    },
    {
        url:"/contact",
        label:'Contact'
    },
]

export const UserData: UserProfileProps[] = [
    {
      name: 'test1',
      address: { street: 'Lamingaton Road 1', city: 'Mumbai' },
      hobbies: ['cricket', 'football']
    },
    {
      name: 'test2',
      address: { street: 'Lamingaton Road 2', city: 'Mumbai' },
      hobbies: ['tennis', 'badminton']
    }
  ];
  
  export const sampleProduct: Product = {
    name: 'Example Product',
    price: 29.99,
    inStock: true,
  };