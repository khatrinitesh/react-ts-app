import React from 'react';
import Banner from '../components/Banner';
import PostList from '../components/PostList';

const About = () => {

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product => {
    <li key={product.id}>
      {product.title}
    </li>
  })
  return (
    <div className='content'>
      <Banner title="About" description="Laborum ea dolore sunt id velit elit magna incididunt minim laboris."/>
      <ul>
        {listItems}
      </ul>
      <PostList/>
    </div>
  );
}

export default About;
