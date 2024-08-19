import React from 'react'
import Banner from '../layout/Banner'
import Example from '../components/typing-functions/5/Example';

const About:React.FC = () => {
  
  return (
    <div className='content'>
      <Banner className="bg-red-400 text-white p-5" title="About" desc="Ullamco officia officia ullamco eu elit et."/>
      <Example />
    </div>
  )
}

export default About
