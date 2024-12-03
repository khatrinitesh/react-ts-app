import React from 'react';
import Banner from './../components/Banner';
import PostListComp from '../hooks/PostListComp';

const ProductList = () => {
  return (
    <div className='content'>
      <Banner title='ProductList' description='Fugiat dolore irure nostrud velit deserunt laborum adipisicing.'/>
      <PostListComp/>
    </div>
  );
}

export default ProductList;
