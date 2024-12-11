import React from 'react';
import { useBgDropDownMenuStore } from '../store/store';

const BgColor:React.FC = () => {

    const {backgroundColor} = useBgDropDownMenuStore();

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setBackgroundColor(e.target.value)
    }

  return (
    <>
      <label htmlFor="background-color">Choose Background Color: </label>
      <select id="background-color" onChange={handleChange}>
        <option value="white">White</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>
    </>
  );
}

export default BgColor;
