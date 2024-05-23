import React from 'react'
import { useState } from 'react';

const CustomApp = () => {

    const [bulletdata,setBulletdata] = useState<BulletListProps[]>([
        {id:1,text:'happy1',color:'blue'},
        {id:2,text:'happy2',color:'orange'},
        {id:3,text:'happy3',color:'red'},
        {id:4,text:'happy4',color:'purple'},
    ]);

    const handleDel= (id:number) =>{
        setBulletdata((prevItem) => prevItem.filter((item) => item.id !== id))
    }

  return (
    <div>
        <Bullet items={bulletdata} onDelete={handleDel}/>
    </div>
  )
}

export default CustomApp

interface BulletColor{
    id:number;
    text:string;
    color:string;
}

interface BulletListProps {
    items:BulletColor[];
    onDelete:(id:number)=> void;
}

const Bullet:React.FC<BulletListProps> = ({items,onDelete}) => {

    return(
        <>
        <ul>
            {items.map((val,index) => {
                return(
                    <li key={index} style={{color:val.color}}>
                        {val.text}
                        <button onClick={() => onDelete(val.id)}>DElete</button>
                    </li>
                )
            })}
        </ul>
        </>
    )
}