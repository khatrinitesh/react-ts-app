import React,{ useRef, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
  return (
    <>
      <AutoWidthInput />
    </>
  );
};

export default CustomApp;

const AutoWidthInput:React.FC = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
            inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
        }
    },[]);

    const handleChange = () => {
        if(inputRef.current){
            inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
        }
    }
    return(
        <>
         <input type="text" ref={inputRef}  className="auto-width-input"  placeholder="type something..." onChange={handleChange} />
        </>
    )
}