import React from "react";
import Rating from './rating';
import './style.css';

const CustomApp = () => {
  const [rating, setRating] = React.useState(0);

  return (
    <div>
      <h1>Custom Rating Component</h1>

      <div>
        <h3>Readonly</h3>
        <Rating count={5} value={5} />
      </div>

      <div>
        <h3>Half Star</h3>
        <Rating count={5} value={4.5} />
      </div>

      <div>
        <h3>Editable</h3>
        <Rating
          count={5}
          value={rating}
          edit={true}
          onChange={(value) => setRating(value)}
        />
        <p>
          <b>Value: </b>
          {rating} stars
        </p>
      </div>
    </div>
  );
};

export default CustomApp;
