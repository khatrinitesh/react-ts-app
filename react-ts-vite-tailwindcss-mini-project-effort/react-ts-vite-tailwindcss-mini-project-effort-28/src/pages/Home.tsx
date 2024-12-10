import React from 'react';
import Banner from '../components/Banner';
import RespondingEvents from '../components/react.dev/Interactivity/RespondingEvents';

const Home = () => {
  return (
    <div className='content'>
      <Banner title="Home" description="Laborum ea dolore sunt id velit elit magna incididunt minim laboris."/>
      <RespondingEvents/>
    </div>
  );
}

export default Home;
