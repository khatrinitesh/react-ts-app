
import { useNavigate } from 'react-router-dom'
import BtnPrimary from '../components/BtnPrimary'
import Banner from '../layout/Banner'
import AnimatedSearchApp from '../components/repository/animatedSearch/1';
import { SEARCH_ANIMATIONS } from '../constants/constants';


const About:React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/service');
  }

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
};

  return (
    <div className='content'>
      <Banner title="About" description="Aliquip adipisicing excepteur velit dolore amet ipsum id laboris."/>
      <BtnPrimary label="Next" onClick={handleNext}/>
      <AnimatedSearchApp
                animation={SEARCH_ANIMATIONS.SLIDE}
                placeholder="Search for something..."
                onSearch={handleSearch}
            />
      
    </div>
  )
}

export default About
