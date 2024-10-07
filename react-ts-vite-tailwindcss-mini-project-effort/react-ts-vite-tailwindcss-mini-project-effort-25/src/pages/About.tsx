import React, { useState } from 'react';
import Banner from '../layout/Banner';
import BtnPrimary from '../components/BtnPrimary';
import WindowWidthComponent from './../components/Resize';

const About = () => {

  const [count,setCount] = useState(0);

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const handleDec = () => {
    setCount((prevCount) => prevCount - 1)
  }
  const handleReset = () => {
    setCount(0)
  }
  return (
    <div className='content'>
      <Banner title='About' description='Esse consectetur sint proident sint irure eiusmod tempor ea anim reprehenderit ullamco aute deserunt anim.'/>
      <WindowWidthComponent/>
      <p>{count}</p>
      <BtnPrimary onClick={handleInc}>Increment</BtnPrimary>
      <BtnPrimary onClick={handleDec}>Decrement</BtnPrimary>
      <BtnPrimary onClick={handleReset}>Reset</BtnPrimary>
    </div>
  );
}

export default About;
