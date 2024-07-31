
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary'
import Banner from '../layout/Banner'

const Home = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/about');
  }
  return (
    <div className='content'>
      <Banner title="Home" description="Aliquip adipisicing excepteur velit dolore amet ipsum id laboris."/>
      <BtnPrimary label="Next" onClick={handleNext}/>
    </div>
  )
}

export default Home
