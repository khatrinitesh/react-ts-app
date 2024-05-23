import React, { useState, useEffect } from "react";
import "./style.css";

const CustomApp = () => {
    const list:InfoProps[] =[
        {id:1,imgUrl:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',alt:'wallpaper1',desc:'Quis id ea eu adipisicing aliquip eiusmod ipsum.'},
        {id:2,imgUrl:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',alt:'wallpaper2',desc:'Quis id ea eu adipisicing aliquip eiusmod ipsum.'},
        {id:3,imgUrl:'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',alt:'wallpaper3',desc:'Quis id ea eu adipisicing aliquip eiusmod ipsum.'},
    ]
  return (
    <>
      <FloatingImg items={list} />
    </>
  );
};

export default CustomApp;

interface InfoProps{
    imgUrl:string;
    alt:string;
    desc:string;
}

const FloatingImg: React.FC<{items:InfoProps[]}> = ({items}) => {
  
    return (
      <>
      {items.map((val,index) => {
        return(
            <div>
                <img src={val.imgUrl} alt={val.alt} />
                <p className="desc">{val.desc}</p>
            </div>
        )
      })}
      </>
    );
  };