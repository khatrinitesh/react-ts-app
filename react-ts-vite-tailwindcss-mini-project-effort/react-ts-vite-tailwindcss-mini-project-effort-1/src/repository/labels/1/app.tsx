import React,{ useRef, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
    const label111 = ["Label 1", "Label 2", "Label 3"];
  return (
    <>
     <h1>Labels</h1>
      <Labels labels={label111}/>
    </>
  );
};

export default CustomApp;

interface LabelProps {
    labels: string[];
  }

const Labels:React.FC<LabelProps> = ({labels}) => {
    return(
        <>
         {labels.map((label,index) => (
            <div key={index}>{label}</div>
         ))}
        </>
    )
}