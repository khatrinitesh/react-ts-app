import React from 'react';
import './style.css';

const CustomApp = () => {
    const handleClick = () => {
        console.log('hi')
    }
  return (
    <div>
        <BlockBtn onClick={handleClick} text="Adipisicing commodo reprehenderit ullamco duis occaecat veniam nulla. Sunt enim cillum laborum et proident pariatur ut anim ipsum labore velit dolore est duis. Ut ullamco culpa quis qui duis mollit eiusmod. Anim aliquip minim esse sit excepteur id laboris culpa non fugiat veniam nisi Lorem. Ullamco elit sit velit sint excepteur cupidatat esse cillum sunt."/>
    </div>
  )
}

export default CustomApp

interface BlockBtnProps {
    onClick:() => void;
    text:string;
}

const BlockBtn:React.FC = ({onClick,text}) => {
return(
    <>
    <button className="block-button" onClick={onClick}>
      {text}
    </button>
    </>
)
}