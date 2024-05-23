import React,{useState } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ];


const CustomApp: React.FC = () => {
  
    return (
      <>
        <ListApp items={items}/>
      </>
    );
  };

export default CustomApp

type Item = {
    id:number;
    name:string;
}

type ListItemProps = {
    items:Item[];
}

const ListApp:React.FC<ListItemProps> = ({items}) => {
    const [activeId,setActiveId] = useState<number | null>(null);

    const handleClick = (id:number) => {
        setActiveId(id)
    }
    return(
        <>
        <ul>
            {items.map((val) => (
                <li key={val.id} onClick={() => handleClick(val.id)} className={`${activeId === val.id ? 'active' : ''}`}>
                    {val.name}
                </li>
            ))}
        </ul>
        </>
    )
}





