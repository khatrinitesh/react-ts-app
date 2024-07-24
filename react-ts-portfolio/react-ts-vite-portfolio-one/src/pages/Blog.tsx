import React, { FC } from 'react';
import Banner from './../components/Banner';
import BlogSection from '../components/BlogSection';

interface BlogProps {}

const Blog: FC<BlogProps> = () => {
  return (
    <div className='content'>
     <Banner title="Blog" desc="Proident voluptate cupidatat voluptate veniam occaecat eiusmod officia nulla."/>
     <BlogSection/>
    </div>
  )
}

export default Blog