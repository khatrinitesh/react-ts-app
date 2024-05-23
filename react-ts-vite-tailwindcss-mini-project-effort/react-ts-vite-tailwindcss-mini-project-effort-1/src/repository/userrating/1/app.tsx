import React, { useState } from 'react'

const CustomApp = () => {
  return (
    <>
        <UserRating/>
    </>
  )
}

export default CustomApp

const UserRating: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null);
  
    const handleRatingChange = (newRating: number) => {
      setRating(newRating);
    };
  
    return (
      <div>
        <p>Please rate this:</p>
        {[1, 2, 3, 4, 5].map((value) => (
          <button key={value} onClick={() => handleRatingChange(value)}>
            {value} star{value !== 1 && 's'}
          </button>
        ))}
        <p>You rated this: {rating === null ? 'Not rated yet' : `${rating} stars`}</p>
      </div>
    );
  };