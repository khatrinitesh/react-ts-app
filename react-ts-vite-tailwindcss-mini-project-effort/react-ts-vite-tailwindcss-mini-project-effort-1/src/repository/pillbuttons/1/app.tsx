import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const CustomApp = () => {
    const [activeBtn,setActivebtn] = useState<string>('');

    const handleBtnClick = (label:string) => {
        setActivebtn(label);
    }

  
  return (
    <>
         <PillBtn
        label="Button 1"
        onClick={() => handleBtnClick('Button 1')}
        isActive={activeBtn === 'Button 1'}
      />
      <PillBtn label="Button 2" onClick={() => handleBtnClick('btn 2')} isActive={activeBtn === 'btn 2'}/>
      <PillBtn label="Button 3" onClick={() => handleBtnClick('btn 3')} isActive={activeBtn === 'btn 3'}/>
    </>
  );
};

export default CustomApp;

interface PillBtnProps{
    label:string;
    onClick?:() => void;
    isActive?:boolean;
}

const PillBtn:React.FC<PillBtnProps> = ({label,onClick,isActive}) => {
    return(
        <>
         <button onClick={onClick} className={`pill-button ${isActive ? 'active' : ''}`}>{label}</button>
        </>
    )
}



