import React from 'react';
import { Slider } from 'react-slick';

const App:React.FC = () => {
  return (
    <>
    <h1>Testimonials</h1>
      <Carousel/>
    </>
  );
}

export default App;

// Define a type for each testimonial
type Testimonial = {
    id: number;
    name: string;
    role: string;
    quote: string;
    imageUrl: string;
  }
  // Sample testimonials data
  const TESTIMONIALS: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO of Company",
      quote: "This service is amazing! It changed the way we do business.",
      imageUrl: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Manager",
      quote: "The best decision we ever made was to use this product.",
      imageUrl: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Product Designer",
      quote: "A game-changer for our team. Highly recommended!",
      imageUrl: "https://via.placeholder.com/100"
    },
  ];

  const Carousel: React.FC = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear'
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {TESTIMONIALS.map((testimonial) => (
            
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-content">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div className="testimonial-text">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  