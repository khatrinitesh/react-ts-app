import React from 'react'
import Banner from '../components/Banner'
import FormComponent from '../components/FillForm'


const Contact = () => {
  return (
    <div className='content'>
        <Banner title="Contact" desc="Pariatur veniam ea laboris consectetur laborum excepteur tempor tempor ut laboris quis quis."/>
        <div className="container mx-auto">
        <FormComponent/>
        </div>
    </div>
  )
}

export default Contact