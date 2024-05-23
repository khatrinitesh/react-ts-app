import React from 'react'

const CustomApp = () => {
    // Sample data for testimonials
const testimonialData: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];
  return (
    <>
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
      <Testimonials testimonials={testimonialData} />
    </div>
    </>
  )
}

export default CustomApp;

// Define interface for testimonial data
interface Testimonial {
    id: number; 
    name: string;
    comment: string;
  }

  // Define props interface for Testimonials component
interface TestimonialsProps {
    testimonials: Testimonial[];
  }

  
  // Testimonials component
const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4 border rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    );
  };