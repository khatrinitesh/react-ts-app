
import { useNavigate } from 'react-router-dom'
import BtnPrimary from '../components/BtnPrimary'
import Banner from '../layout/Banner'

const About = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/service');
  }
  return (
    <div className='content'>
      <Banner title="About" description="Aliquip adipisicing excepteur velit dolore amet ipsum id laboris."/>
      <BtnPrimary label="Next" onClick={handleNext}/>
    </div>
  )
}

export default About
