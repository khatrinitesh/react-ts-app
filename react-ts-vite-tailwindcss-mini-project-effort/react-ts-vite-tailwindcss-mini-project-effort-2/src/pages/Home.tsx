import React from 'react';
// COMPONENTS
import Banner from '../components/Banner';
import ApiComponent from '../components/apifetchdata/bet365/1';
import ApiFGComponent from '../components/apifetchdata/freetogame/1';

const Home = () => {
  return (
    <div className='content h-full'>
            <Banner title='Home' desc="Velit incididunt nostrud sunt incididunt incididunt voluptate laborum adipisicing labore ipsum voluptate enim in ea."/>
        <div className='container px-4 mx-auto'>
          <ApiFGComponent/>
        </div>
    </div>
  )
}

export default Home