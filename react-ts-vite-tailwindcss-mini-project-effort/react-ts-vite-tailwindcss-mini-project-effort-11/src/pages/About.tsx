import React from 'react'
import Banner from '../layout/Banner'
import CalculatorComp from './../components/CalculatorComp';
import CalendarComp from '../components/CalendarComp';
import FinalModal from '../components/FinalModal';
import CardComp from '../components/CardComp';
import { CARD_TYPES } from '../constants/constants';

const About = () => {
  
  return (
    <div className='content'>
      <Banner title="About" desc="Exercitation duis ullamco quis proident officia deserunt deserunt aute cillum."/>
      <CardComp title="Card Title"
        content={<p>This is the content of the card.</p>}
        imageUrl="https://via.placeholder.com/300x150"
        actions={<button>Click Me</button>}
        className={CARD_TYPES.ELEVATED} // Optional: Use card type constants if applicable/>
        />
      <FinalModal/>
      <CalendarComp/>
      <CalculatorComp/>
    </div>
  )
}

export default About