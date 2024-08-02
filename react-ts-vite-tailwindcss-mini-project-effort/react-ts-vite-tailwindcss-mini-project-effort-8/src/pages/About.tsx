import React, { useState } from 'react'
import Banner from '../layout/Banner'
import Login from './Login'
import Home from './Home'
import APIDataResponses from '../components/apidataresponses/1'
import CustomHooks from '../components/customhooks/1'
import ChildPatternApp from '../components/ChildrenPattern/1'
import BtnPrimary from '../components/Button/BtnPrimary'

const About = () => {

  const [isModalOpen,setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
    console.log(setIsModalOpen(true))
  }
  const closeModal = () => {
    setIsModalOpen(false);
    console.log(setIsModalOpen(false))
  }
  return (
    <div className='content'>
        <Banner title='About' description='Aute consectetur tempor consectetur culpa fugiat ad nisi pariatur exercitation dolor minim.'/>
        <BtnPrimary onClick={openModal}>Open Modal</BtnPrimary>
        {isModalOpen && (
          <> <ChildPatternApp isOpen={openModal} onClose={closeModal}>
          <h2>Modal Title</h2>
          <p>This is the content inside the modal.</p>
        </ChildPatternApp>
          </>
        )}
       
        <CustomHooks/>
        <APIDataResponses/>
    </div>
  )
}

export default About