import React, { FC } from 'react';
import Banner from './../components/Banner';
import UserSection from '../components/UserSection';

interface UsesProps {}

const Uses: FC<UsesProps> = () => {
  return (
    <div className='content'>
      <Banner title="Uses" desc="Proident voluptate cupidatat voluptate veniam occaecat eiusmod officia nulla."/>
      <UserSection/>
    </div>
  )
}

export default Uses;