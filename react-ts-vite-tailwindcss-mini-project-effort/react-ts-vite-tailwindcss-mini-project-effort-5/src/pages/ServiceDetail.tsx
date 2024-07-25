import React, { useEffect, useState } from 'react'
import Banner from '../layout/Banner'
import { PostProps } from '../interface/interface'
import { Router, useNavigate, useNavigation, useParams } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary';

const ServiceDetail:React.FC = () => {
  const [posts,setPosts] = useState<PostProps[]>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState(null);
  const apiurl = import.meta.env.VITE_APP_API1
  const {id} = useParams<{id:string}>();

  const fetchData = async () => {
    if(id){
    setLoading(true);
    try {
      const response = await fetch(`${apiurl}/${id}`)
      if(!response.ok){
        throw new Error('sorry something went wrong')
      }
      const finalResult = await response.json()
      setPosts(finalResult)
      setLoading(false);
      console.log(finalResult);
      
    } catch (error) {
      console.error(error.message)
    }
  };
}

  useEffect(() => {
    fetchData()
  },[id])

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/service')
  }

  return (
    <div className='content'>
        <div className="container mx-auto">
            <Banner title="Service" description='Consectetur sunt deserunt officia ex deserunt commodo ad sit.'/>
            <BtnPrimary onClick={handleBack} label="Back"/>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {posts.id} - {posts.title}
        </div>
    </div>
  )
}

export default ServiceDetail