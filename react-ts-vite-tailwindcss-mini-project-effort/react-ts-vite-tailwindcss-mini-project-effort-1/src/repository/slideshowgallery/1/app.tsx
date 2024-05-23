import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

const slides = [
    { imageUrl: 'https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg', caption: 'Slide 1' },
    { imageUrl: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', caption: 'Slide 2' },
    { imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg', caption: 'Slide 3' },
    // Add more slides as needed
  ];

const CustomApp = () => {
  return (
    <>
        <SlideshowGallery slides={slides}/>
    </>
  )
}

export default CustomApp



interface Slide {
    imageUrl: string;
    caption: string;
  }
  
  interface SlideshowGalleryProps {
    slides: Slide[];
  }

  const SlideshowGallery: React.FC<SlideshowGalleryProps> = ({ slides }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="slideshow-gallery">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.imageUrl} alt={slide.caption} />
              <p className="caption">{slide.caption}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  