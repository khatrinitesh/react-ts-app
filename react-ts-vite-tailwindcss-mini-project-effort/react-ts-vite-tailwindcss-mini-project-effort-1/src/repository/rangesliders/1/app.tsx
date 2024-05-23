import React, { useEffect, useState } from "react";

const CustomApp: React.FC = () => {
 

  return (
    <>
      <RangeSliders />
    </>
  );
};

export default CustomApp;

const RangeSliders:React.FC = () => {
  const [value,setValue] = useState<number>(50)


  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value))
  }

  return(
    <>
    <h1>Range Slider Example</h1>
     <input type="range" value={value} onChange={handleChange} min={0} max={100} />
     <p>Value: {value}</p>
    </>
  )
}


