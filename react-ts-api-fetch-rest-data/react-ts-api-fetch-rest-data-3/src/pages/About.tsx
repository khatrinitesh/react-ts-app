import React from 'react';
import { BannerTypes } from '../types';
import Banner from '../layout/Banner';
import usePost from '../hooks/usePosts';

const About:React.FC<BannerTypes> = ({title,description}) => {

  const {posts,loading} = usePost();

  if(loading) return <p>Loading...</p>
  return (
    <div className='content'>
      <Banner title="About" description="Aliqua ad occaecat qui nisi nisi et labore."/>
      <div className="container mx-auto px-[1rem]">
        <div className='gap-4 grid'>
      {posts.map((val) => (
        <div key={val.id} className='card shadow p-2'>
          <h3 className='font-bold'>{val.title}</h3>
          <p>{val.body}</p>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}

export default About;
