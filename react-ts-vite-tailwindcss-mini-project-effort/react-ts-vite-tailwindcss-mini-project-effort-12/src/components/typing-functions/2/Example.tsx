import React from 'react'

const items = ['Item 1', 'Item 2', 'Item 3']; // Define your data constants

const Example:React.FC = () => {

    const handleItemClick = (item:string) => {
        console.log(`you clicked ${item}`) // define a handler function
      }
  return (
    <>
    <ListComp items={items} onItemClick={handleItemClick}/>
    </>
  )
}

export default Example


interface ListProps{
    items:string[];
    onItemClick:(item:string) => void;
}

const ListComp:React.FC<ListProps> = ({items,onItemClick}) => {
    return(
        <>
        {items.map((val,index) => (
            <>
             <p key={index}>val</p>
             <button onClick={() => onItemClick(val)}>{val}</button>
            </>
        ))}
        </>
    )
}