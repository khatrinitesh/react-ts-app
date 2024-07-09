import React from 'react'
import Banner from '../components/banner'

const About:React.FC = () => {
  return (
    <div className='content'>
        <Banner bannerStyle="bg-cyan-500 text-white" title="About page" description='Qui enim tempor sint cillum cillum.'/>
    </div>
  )
}

export default About