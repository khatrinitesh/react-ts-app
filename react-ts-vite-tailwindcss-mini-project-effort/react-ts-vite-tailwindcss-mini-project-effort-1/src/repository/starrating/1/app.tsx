import React, { useState } from "react";

const CustomApp = () => {
  return (
    <div>
<h1>Star Rating Example</h1>
      <StarRating rating={3} />
    </div>
  )
}

export default CustomApp

// Define interface for rating data
interface RatingData {
    rating: number;
  }

  const StarRating: React.FC<RatingData> = ({ rating }) => {
    // State to manage the current rating
    const [currentRating, setCurrentRating] = useState<number>(rating);
  
    // Event handler for clicking on a star
    const handleStarClick = (newRating: number) => {
      setCurrentRating(newRating);
    };
  
    return (
      <div>
        {[1, 2, 3, 4, 5].map((index) => (
          <Star
            key={index}
            filled={index <= currentRating}
            onClick={() => handleStarClick(index)}
          />
        ))}
        <p>Current rating: {currentRating}</p>
      </div>
    );
  };

  interface StarProps {
    filled: boolean;
    onClick: () => void;
  }

  const Star: React.FC<StarProps> = ({ filled, onClick }) => {
    return (
      <span
        onClick={onClick}
        style={{
          cursor: "pointer",
          color: filled ? "gold" : "lightgray"
        }}
      >
        ★
      </span>
    );
  };