import React from "react";
import './style.css';

const CustomApp = () => {
  return (
    <>
      <CardContainer />
    </>
  );
};

export default CustomApp;

const CardContainer: React.FC = () => {
  return (
    <>
      <button class="btn one">Hover</button>
      <button class="btn two">Hover</button>
      <button class="btn three">Hover</button>
    </>
  );
};
