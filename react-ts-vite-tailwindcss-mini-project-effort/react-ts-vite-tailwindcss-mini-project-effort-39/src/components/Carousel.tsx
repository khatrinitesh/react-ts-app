import React from 'react';
import  { SLIDER_DATA } from '../constants/constants';
import Slider from "react-slick";
// In index.tsx or App.tsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel:React.FC = () => {

     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,  
    };
  return (
    <>
        <div className="w-full flex justify-end">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
                <Slider {...settings}>
                {SLIDER_DATA.map((slide) => (
                    <div key={slide.id} className="p-4">
                    <img src={slide.image} alt={slide.title} className="w-full rounded-md" />
                    <h2 className="text-xl font-bold mt-4">{slide.title}</h2>
                    <p className="text-gray-600">{slide.description}</p>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    </>
  );
}

export default CustomCarousel;
