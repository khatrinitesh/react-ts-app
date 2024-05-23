import React,{useState } from 'react'
import { Link } from 'react-router-dom'

const CustomApp = () => {
    const items = [
        {id:1,name:'happy'},
        {id:2,name:'smile'},
        {id:3,name:'sad'},
        {id:4,name:'mood'},
    ];
  return (
    <>
        <SearchMenu items={items}/>
    </>
  )
}

export default CustomApp

type MenuItem = {
    id:number;
    name:string;
    link:string;
}

type MenuProps = {
    items:MenuItem[];
}

const SearchMenu:React.FC<MenuProps> = ({items}) => {
    const [searchTerm,setSearchTerm] = useState("");
    
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    return(
        <>
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." />
        <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
        </ul>
        </>
    )
}



