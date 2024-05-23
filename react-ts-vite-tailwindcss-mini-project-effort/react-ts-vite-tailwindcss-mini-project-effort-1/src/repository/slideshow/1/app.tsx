import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "./style.css";
// import required modules
import  { Navigation, Pagination, Autoplay } from "swiper";


const slides = [
    { imageUrl: 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg', caption: 'Slide 1' },
    { imageUrl: 'https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg', caption: 'Slide 2' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg', caption: 'Slide 3' },
    // Add more slides as needed
  ];
const CustomApp = () => {
  return (
    <>
    <div className="container mx-auto">
    <SwiperSlideshow slides={slides}/>
    </div>
    </>
  )
};

export default CustomApp;



interface Slide {
  imageUrl: string;
  caption: string;
}

interface SwiperSlideshowProps {
  slides: Slide[];
}

const SwiperSlideshow: React.FC<SwiperSlideshowProps> = ({ slides }) => {
    return (
      <>
     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="swiper-slide-content"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="swiper-slide-caption">{slide.caption}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </>
    );
  };
  
