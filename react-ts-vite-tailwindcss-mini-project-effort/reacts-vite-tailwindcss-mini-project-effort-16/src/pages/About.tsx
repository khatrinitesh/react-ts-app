import React from 'react';
import { BannerProps } from '../interface';
import Banner from '../layout/Banner';

const About:React.FC = () => {
  return (
    <div className='content'>
      <Banner title="About" desc="Labore ipsum est proident nisi culpa."/>
    </div>
  );
}

export default About;
