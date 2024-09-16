import React from 'react';
import Banner from '../assets/layout/Banner';
import Counter from './../components/Counter';
import UserList from '../components/UserList';

const About = () => {
  return (
    <div className='content'>
      <Banner title='About' description='Anim officia nisi dolor consequat.'/>
      <div className="container mx-auto">
      <Counter/>
      <UserList/>
      </div>
    </div>
  );
}

export default About;
