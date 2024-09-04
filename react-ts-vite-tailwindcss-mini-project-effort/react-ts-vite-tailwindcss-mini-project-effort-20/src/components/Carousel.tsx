import React, { useState,useEffect  } from "react";

import { CarouselProps } from "../type";

const CascadeSlider: React.FC<CascadeSliderProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = slides.length;
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };
  
    useEffect(() => {
      const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="cascade-slider_container">
        <div className="cascade-slider_slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`cascade-slider_item ${index === currentIndex ? 'now' : ''} ${
                index === (currentIndex - 1 + totalSlides) % totalSlides ? 'prev' : ''
              } ${
                index === (currentIndex + 1) % totalSlides ? 'next' : ''
              }`}
            >
              <div className="card align">
                <div className="photo">
                  <img src={slide.image} alt={slide.title} className="max-w-20 mx-auto" />
                </div>
                <div className="info">
                  <h2>{slide.title}</h2>
                  <div className="subtitle">Segunda a Sábado:</div>
                  <div className="content">{slide.schedule}</div>
                  <div className="subtitle">dummy text ever:</div>
                  <div className="content">{slide.dummyText}</div>
                  <a className="button" href={slide.link}>{slide.buttonText}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <ol className="cascade-slider_nav">
          {slides.map((_, index) => (
            <li
              key={index}
              className={`cascade-slider_dot ${index === currentIndex ? 'cur' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></li>
          ))}
        </ol>
  
        <span className="cascade-slider_arrow cascade-slider_arrow-left" onClick={prevSlide}>
          <img src="https://agenciafagulha.com.br/wp-content/uploads/2019/12/chvron-left.svg" alt="Previous" />
        </span>
        <span className="cascade-slider_arrow cascade-slider_arrow-right" onClick={nextSlide}>
          <img src="https://agenciafagulha.com.br/wp-content/uploads/2019/12/chvron-right.svg" alt="Next" />
        </span>
      </div>
    );
  };
  

export default CascadeSlider;
