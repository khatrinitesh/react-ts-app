import React, { useState } from "react";

const CustomApp = () => {

  const [listdata, setListdata] = useState<BulletListProps[]>([
    {
        id:1,
        text:'item1'
    },
    {
        id:2,
        text:'item2'
    },
    {
        id:3,
        text:'item3'
    },
  ]);

  const handleDel = (id:number) =>{
    setListdata((prevItem) => prevItem.filter((val) => val.id !==id ))
  }

  return (
    <>
      <Bullet items={listdata} onDelete={handleDel} />
    </>
  );
};

export default CustomApp;

interface BulletListProps {
  items: string;
  onDelete: (id: number) => void;
}

const Bullet: React.FC<BulletListProps> = ({ items, onDelete }) => {
  return (
    <>
      <ul>
        {items.map((val, index) => {
          return (
            <>
              <li key={index}>
                {val.text}
                <button onClick={() => onDelete(val.id)}>Delete</button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
