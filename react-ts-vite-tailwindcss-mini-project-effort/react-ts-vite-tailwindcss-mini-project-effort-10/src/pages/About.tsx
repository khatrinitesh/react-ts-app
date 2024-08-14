import React from 'react'
import Banner from '../layout/Banner'
import AccordionComp from '../components/Accordion/Accordion'
import ImagesGallery from '../components/ImagesGallery/ImagesGallery'
import ButtonBlock from '../components/ButtonBlock/ButtonBlock'
import BlurredBackground from '../components/BlurBackgroundImage/BlurBackgroundImage'
import ImageWithBorder from '../components/BorderAroundImage/BorderAroundImage'
import BorderFrame from '../components/BorderFrame/BorderFrame'
import BulletList from '../components/BulletList/BulletList'
import { bulletData } from '../constants/bulletData'

const About = () => {
  return (
    <div className='content'>
      <Banner title="About" desc="Irure quis anim minim deserunt nisi commodo non." className='bg-red-500 py-10'/>
      <div className="container mx-auto">
      <BulletList 
        items={bulletData} 
        bulletColor="text-blue-500" // Custom bullet color
      />
      <BorderFrame
        borderColor="border-blue-500"  // Example border color
        borderWidth="border-8"        // Example border width
        borderRadius="rounded-xl"     // Example border radius
        padding="p-6"                 // Example padding
      >
        <h1 className="text-center">This is a Border Frame</h1>
        <p className="text-center">It can contain any content you want.</p>
      </BorderFrame>
      <ImageWithBorder
        src="https://via.placeholder.com/600x400"
        alt="Placeholder Image"
        borderColor="border-red-500"  // Example border color
        borderWidth="border-8"        // Example border width
        borderRadius="rounded-full"   // Example border radius
      />
      <BlurredBackground imageUrl="https://via.placeholder.com/1200x800">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to My Site</h1>
        <p className="mt-4 text-lg">This is a sample description over a blurred background.</p>
      </div>
    </BlurredBackground>
        <ButtonBlock/>
        <AccordionComp/>
        <ImagesGallery/>  
        
      </div>
    </div>
  )
}

export default About