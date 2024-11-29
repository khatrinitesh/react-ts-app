import React from 'react';
import Banner from '../components/Banner';
import AccordionComp from '../components/AccordionComp';

const Home = () => {
  return (
    <div className='content'>
      <Banner title='Home' description='Qui nulla sint aliquip id commodo elit consequat proident veniam irure anim adipisicing.' bannerStyle='bg-black'/>
      <div className="container mx-auto">
        <AccordionComp/>
      </div>
    </div>
  );
}

export default Home;
