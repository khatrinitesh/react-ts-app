import React from 'react';
import { BannerTypes } from '../types';
import Banner from '../layout/Banner';
import UseUser from '../hooks/useUser';
import UserComponent from '../components/UserComponent';

const Home:React.FC<BannerTypes> = ({title,description}) => {

  const {users,loading} = UseUser();

  if(loading) return <div>Loading...</div>
  return (
    <div className='content'>
      <Banner title="Home" description="Aliqua ad occaecat qui nisi nisi et labore."/>
      <div className="container mx-auto px-[1rem]">
      {users.map(user => (
        <UserComponent key={user.id} user={user} />
      ))}
      </div>
    </div>
  );
}

export default Home;
