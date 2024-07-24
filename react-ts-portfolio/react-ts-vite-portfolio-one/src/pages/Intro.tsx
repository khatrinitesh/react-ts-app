import React, { FC } from 'react';
import Banner from './../components/Banner';
import Feature from '../components/Feature';

interface IntroProps {}

const Intro: FC<IntroProps> = () => {
  return (
    <div className='content'>
      <Banner title="Intro" desc="Proident voluptate cupidatat voluptate veniam occaecat eiusmod officia nulla."/>
      <Feature/>
    </div>
  );
}

export default Intro;