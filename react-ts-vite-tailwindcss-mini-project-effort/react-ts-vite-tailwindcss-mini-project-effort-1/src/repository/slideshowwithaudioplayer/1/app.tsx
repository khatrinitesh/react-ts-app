import React, { useState } from 'react';
import Slider from 'react-slick';
import ReactAudioPlayer from 'react-audio-player';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const slides = [
  { imageUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', audioUrl: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3', caption: 'Slide 1' },
  { imageUrl: 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg', audioUrl: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3', caption: 'Slide 2' },
  { imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg', audioUrl: 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3', caption: 'Slide 3' },
  // Add more slides with audio as needed
];


const CustomApp = () => {

  return (
    <>
      <h1>Slideshow with Audio</h1>
      <SlideshowWithAudio slides={slides} />
      </>
  )
}

export default CustomApp

interface Slide {
  imageUrl: string;
  audioUrl: string;
  caption: string;
}

interface SlideshowWithAudioProps {
  slides: Slide[];
}


const SlideshowWithAudio: React.FC<SlideshowWithAudioProps> = ({ slides }) => {
  const [currentSlide,setCurrentSlide] = useState<number>(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <div className="slideshow-with-audio">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.imageUrl} alt={slide.caption} />
            <p className="caption">{slide.caption}</p>
          </div>
        ))}
      </Slider>
      <ReactAudioPlayer src={slides[currentSlide].audioUrl} autoPlay controls />
    </div>
  );
};
