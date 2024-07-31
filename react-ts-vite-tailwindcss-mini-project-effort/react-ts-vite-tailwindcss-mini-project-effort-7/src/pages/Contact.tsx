
import { useNavigate } from 'react-router-dom';
import Banner from '../layout/Banner'
import BtnPrimary from '../components/BtnPrimary';

const Contact = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/service');
  }
  return (
    <div className='content'>
      <Banner title="Contact" description="Aliquip adipisicing excepteur velit dolore amet ipsum id laboris."/>
      <BtnPrimary label="Back" onClick={handleBack}/>
    </div>
  )
}

export default Contact
