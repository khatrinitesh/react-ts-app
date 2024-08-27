import React from 'react';
import { BannerProps } from '../interface';
import Banner from '../layout/Banner';

const Home:React.FC = () => {
  return (
    <div className='content'>
      <Banner title="Home" desc="Labore ipsum est proident nisi culpa."/>
    </div>
  );
}

export default Home;
