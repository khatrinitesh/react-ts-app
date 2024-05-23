import React, { useState, useEffect } from 'react';
import './style.css';

const CustomApp = () => {
    const procardlist = [
        {
            id:1,
          name: 'Basic 1',
          description:'Sit exercitation et pariatur tempor excepteur pariatur cillum voluptate qui quis nostrud ut cupidatat.',
          price: 10,
          imageUrl:'https://w0.peakpx.com/wallpaper/390/568/HD-wallpaper-artificial-intelligence-background-vectors-stock-psd-vision.jpg'
        },
        {
            id:2,
            name: 'wwf 2',
            description:'Sit exercitation et pariatur tempor excepteur pariatur cillum voluptate qui quis nostrud ut cupidatat.',
            price: 20,
            imageUrl:'https://wallpapers.com/images/featured/wrestling-uxstyzkvrajyuemx.jpg'
        },
        {
            id:3,
            name: 'wwf 3',
            description:'Sit exercitation et pariatur tempor excepteur pariatur cillum voluptate qui quis nostrud ut cupidatat.',
            price: 30,
            imageUrl:'https://wallpapercave.com/wp/wp1977220.jpg'
        },
      ];
  return (
    <div>
        <ProductCard procard={procardlist}/>
    </div>
  )
}

export default CustomApp

interface ProCar{
    id:number; // 1 id
    name:string; // 2 name
    description:string; // 3 description
    price:number; // 4 price
    imageUrl:string; // 5 imageurl
}

interface PCProps{
    procard:ProCar[]
}

const ProductCard:React.FC<PCProps> = ({procard}) => {

    return(
        <>
         {procard.map((pro) => (
            <div className="pricing-plan" key={pro.id}>
                <h2 className="plan-name">{pro.name}</h2>
                <p className="plan-desc">{pro.description}/month</p>
                <p className="plan-price">${pro.price}/month</p>
                <img src={pro.imageUrl} alt={pro.name} />
            </div>
         ))}
        </>
    )
}